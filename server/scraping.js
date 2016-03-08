var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var scrape = function (req,response){
  console.log('scrape called')
  console.log(req.body)
  var url = req.body.url ;
  console.log('url is ',url)
  //var url = 'http://www.amazon.com/Outlander-Packable-Lightweight-Backpack-Daypack-Green-L/dp/B00Q9SH8SO/ref=sr_1_2?ie=UTF8&qid=1457464085&sr=8-2&keywords=backpack';//'http://www.imdb.com/title/tt1229340/';
  //var url2 = 'http://www.amazon.com/gp/product/B0036E8V08/ref=br_prlt_slcty_pdt-2?ie=UTF8&smid=ATVPDKIKX0DER&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-3&pf_rd_r=0VKNGR5G7K09B93GWXC6&pf_rd_t=101&pf_rd_p=1d15272e-cf92-4c19-b6e8-aeb6aafd9ecb&pf_rd_i=11605840011';
  request(url,  function(error, res , html){

    if(error){
      console.log('Error in scrape request');
      return 'error in scrape';
    }
      var $ = cheerio.load(html);
      
      var productTitle = $("#productTitle").text();
      var productPrice = $('#priceblock_ourprice').text();
      var productObj = {Name : productTitle, price: productPrice, rating: ''};
     response.send(productObj);
  })
  
}

module.exports = {scrape: scrape}