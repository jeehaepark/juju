var CronJob = require('cron').CronJob;
var Promise = require("bluebird");
var request = Promise.promisifyAll(require("request"));
var requestMultiArg = Promise.promisifyAll(require("request"), {multiArgs: true});
var scrapeTool = require('./scraping.js');
var pgp = require('pg-promise')(/*options*/)
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

module.exports = {
  itemHistory : function (){
    var allItems;
    new CronJob('01 01-60 * * * *' , function () {
      //console.log('ppooop');
      request.getAsync('http://localhost:3000/api/items')
      .then(function(res){
        var items = JSON.parse(res.body);

        // items is an array of objects
        return items;
      })
      .then(function(items){
        return Promise.map(items, function(item){
          // console.log('item: ', item);
          //do scrape request in here
          var options = {
            url: 'http://localhost:3000/scrape',
            method: 'POST',
            form: {'url': item.itemurl}
          }

          return requestMultiArg.postAsync(options)
        })
        .then(function(responseArray){
          var currentDate = ///function

          Promise.each(responseArray, function(resp){
            var res = JSON.parse(resp.body);
            // console.log('resp body: ', typeof resp.body);
            db.tx(function(t){
              return t.one("UPDATE items SET currentPrice=${price}  WHERE items.itemUrl = ${productUrl} returning id", res)
              .then(function(itemID){
                res.itemID = itemID.id;
                res.currentDate = '2016-04-19';
                return t.one("INSERT INTO itemhistories (itemid, price, checkdate) VALUES (${itemID}, ${price}, ${currentDate}) returning id", res)
              })
              .catch(function(err){
                console.log(err);
              })
              .then(function(id){
                console.log('our id: ', id);
              })
            });
          });

          // console.log('inside each - response.body', responseArray[0].body);

          /*
           * {
           * "productTitle":"Cygolite Expilion 720 USB Light",
           * "price":"$79.99",
           * "picture":"http://ecx.images-amazon.com/images/I/51jgDUFBEmL._SX300_QL70_.jpg",
           * "productUrl":"http://www.amazon.com/gp/product/B00LXTP2FA/ref=s9_simh_gw_g468_i1_r?ie=UTF8&fpl=fresh&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-1&pf_rd_r=1AP11P4BPYNJ3KJ17WJ4&pf_rd_t=36701&pf_rd_p=2079475242&pf_rd_i=desktop"
           * }
           */

          // if(response.statusCode===200){
          //   var price=response.body.price;

          //   item.price = price;
          // }
          return responseArray;
        })
      })
      .catch(function(e){
        console.log('error', e);
      })
      // .then(function(itemUrlArr){

      //   // building up req/res parameters to inject in scrape function
      //   for(var i = 0; i < itemUrlArr.length; i++){
      //     var reqBodyUrl = {
      //       body: {
      //         url : itemUrlArr[i]
      //       }
      //     }
      //     scrapeTool.scrape(reqBodyUrl);
      //   }
      // console.log(scrapeTool.scrape);
      //});
      // // check getAsync's callbacks or use callbacks to handle the async results
      // .then(function(err, res, body) {
      //   // console.log(JSON.parse(body));
      //   allItems = JSON.parse(body);
      //   // console.log(allItems);
      //   return allItems;
      // })
      // .then(function(items){
      //   console.log('hill', items);
      //   // return items;
      // });

      // add promise

      // console.log('look', typeof allItems);
      // allItems = Array.prototype.slice.call(allItems);


    },

    // function to run when job stops
    function (){
      console.log('job stopped.  Could be a cron jrob crash');
    }, true, 'America/Los_Angeles');
  },

  test : function () {
    var seconds = 0;
    new CronJob('00-60 * * * * *', function () {
      seconds++;
      console.log('It\'s been '+ seconds + ' seconds');
    },
    function(){
      console.log('job stopped');
    }, true, 'America/Los_Angeles');
  }
}

