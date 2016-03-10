var CronJob = require('cron').CronJob;
var scrapTools = require('./scraping.js');

var seconds = 0;

exports.test = function (){
  return new CronJob('00 * * * * *' , function () {
    //seconds++;
    console.log('Yo its been min');
  }, 
  function (){
    console.log('called from jobstop');
  }, true, 'America/Los_Angeles');

}

exports.min = function () {
  new CronJob('00 * * * * *', function () {
    seconds++;
    console.log('yo its been '+ seconds);
  }, 
  function(){
    console.log('beep')
  }, true, 'America/Los_Angeles');
}