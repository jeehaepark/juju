var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/juju';

// CREATE A SINGLE ITEM
//curl --data 'name=photo&itemUrl=www.photo.com&itemImageUrl=www.photo.com&currentPrice=9000' http://127.0.0.1:3000/api/v1/items

router.post('/api/additems', function(req, res) {
  var results = [];
  console.log('req', req.body)
  // Grab data from http request
    var data = {
        name: req.body.itemNickName, 
        itemUrl: req.body.itemUrl, 
        itemImageUrl:req.body.itemImageUrl, 
        currentPrice:req.body.currentPrice,
        idealPrice : req.body.idealPrice,
        createdDate : req.body.createdDate,
        userId : req.body.userId,
        itemExists : false
    };
  
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    
    // Handle connection errors
    if(err) {
      done();
      return res.status(500).json({ success: false, data: err});
    }

    // SQL Query 
    var query = client.query({
      text : "SELECT id FROM items WHERE itemUrl = $1",
      values : [data.itemUrl]}, 
      function(err, result){
        if(err){
          console.log('err', err);
        }else{
          console.log('result', result);
          if (result.rows.length===0){
            console.log('item not yet in database');
            client.query({
              text :'INSERT INTO items(name, itemUrl, itemImageUrl, currentPrice) values($1, $2, $3, $4) Returning id', 
              values : [data.name, data.itemUrl, data.itemImageUrl, data.currentPrice] }, 
              function (err, result){
                if(err){
                  console.log('err', err);
                }else{
                  console.log('result of insert', result);
                  data.itemId=result.rows[0].id;
                  console.log('added item to the database, saving itemId', data);
                }
              })
          }else{
              data.itemId=result.rows[0].id;
              data.itemExists=true;
              console.log('data', data);
          } 
        }
        if(!data.itemExists){
          client.query({
            text: 'INSERT INTO itemHistories(price, checkDate, itemID) values ($1, $2, $3)',
            values : [data.currentPrice, data.createdDate, data.itemId]
          }, function(err, result){
            if(err){
              console.log(err);
            }
          })
        }
        client.query({
          text: 'INSERT INTO watchedItems(idealPrice, priceReached, emailed, itemID, userID) values ($1, $2, $3, $4, $5)',
          values: [data.idealPrice, false, false, data.itemId, data.userId]}, 
          function(err, result){
            if (err){
              console.log(err);
            }else{
              console.log('OMG I THINK WE DID IT!!!!');
            }
          })    
        
        });

    // Stream results back one row at a time
    query.on('row', function(row) {
      results.push(row);
      console.log('res in query on', res);
    });

    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      return res;
    });
  });
});

//READ GET ALL ITEMS
router.get('/api/v1/items', function(req, res) {

    var results = [];

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        // SQL Query > Select Data
        var query = client.query('SELECT * FROM items ORDER BY id ASC;');

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });

    });

});

//UPDATE A SINGLE ITEM
//curl -X PUT --data 'name=test@test.com&itemUrl=510-111-1111&itemImageUrl=jujupw&currentPrice=JuJu' http://127.0.0.1:3000/api/v1/items/1
router.put('/api/v1/items/:item_id', function(req, res) {

    var results = [];

    // Grab data from the URL parameters
    var id = req.params.item_id;

    // Grab data from http request
    var data = {name: req.body.name, itemUrl: req.body.itemUrl, itemImageUrl:req.body.itemImageUrl, currentPrice:req.body.currentPrice};

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).send(json({ success: false, data: err}));
        }

        // SQL Query > Update Data
        client.query('UPDATE items SET email=($1), phoneNumber=($2), password=($3), userName=($4) WHERE id=($5)', [data.name, data.itemUrl, data.itemImageUrl, data.currentPrice, id]);

        // SQL Query > Select Data
        var query = client.query('SELECT * FROM items ORDER BY id ASC');

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });

});

module.exports = router;