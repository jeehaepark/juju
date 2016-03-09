var router = express.Router();

// CREATE A ITEM HISTORY
//curl --data "price=10&checkDate=2016-03-08&itemID=jujupw&userName=AdminJuJu" http://127.0.0.1:3000/api/v1/histories
router.post('/api/v1/histories', function(req, res) {

    var results = [];

    // Grab data from http request
    var data = {price: req.body.price, checkDate: req.body.checkDate, itemID:req.body.itemID};

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        // SQL Query > Insert Data
        client.query('INSERT INTO itemHistories(price, checkDate, itemID, userName) values($1, $2, $3)', [data.price, data.checkDate, data.itemID]);

        // SQL Query > Select Data
        var query = client.query('SELECT * FROM itemHistories ORDER BY id ASC');

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