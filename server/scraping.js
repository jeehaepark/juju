var request = require('request');
var cheerio = require('cheerio');

//scrapes item data from target
var scrape=function(req, response){
  var url=req.body.url;
  var site=url.match(/([A-Z])*www\.([a-z])*\./g);
  site=site[0].slice(4, -1);
  scrapeObj[site](req, response)
};

var scrapeObj={
  amazon: function (req,response){
  var url = req.body.url ;

  request(url,  function(error, res , html){

    if(error){
      console.log('Error in scrape request');
      return 'error in scrape';
    }
    //convert into html into a cheerio object
    var $ = cheerio.load(html);

    var productTitle = $('#productTitle').text();
    var priceDiv = $('#price');
    var productPrice;

    //check if item is onsale
    if(priceDiv.find('#priceblock_dealprice').length) {
      productPrice = priceDiv.find('#priceblock_dealprice').text();
    } else if (priceDiv.find('#priceblock_saleprice').length){
      productPrice =$('#priceblock_saleprice').text();
    } else {
      productPrice = $('#priceblock_ourprice').text();
    }

    var image = $('#imgTagWrapperId').children('img').attr('src');

    var productObj = {Name : productTitle, price: productPrice, picture: image };

    //sends scraped data to sender
    response.send(productObj);
  });
  },
  target: function (req,response){
    var url = req.body.url ;

    request(url,  function(error, res , html){

      if(error){
        console.log('Error in scrape request');
        return 'error in scrape';
      }
      //convert into html into a cheerio object
      var $ = cheerio.load(html);

      var productTitle = $('.product-name').children('name').text();
      //var priceDiv = 
      var productPrice=$('.offerPrice').text();
     

      var image = $('#Hero').children('img').attr('src');

      var productObj = {Name : productTitle, price: productPrice, picture: image };

      //sends scraped data to sender
      response.send(productObj);
    });
  }
};


module.exports = {scrape: scrape, scrapeObj: scrapeObj};
