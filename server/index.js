require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cron = require('./cronJobs.js')
var app = express();
var router = express.Router();
var scrapeTools = require('./scraping.js');
var Promise = require('bluebird');

require('./config/middleware.js')(app, express);

var port = process.env.PORT;

//cron.watchedItems();
cron.sendNotifications();
// TODO: write promise to schedule cron jobs correctly
// return Promise(cron.itemHistory())
// .then(function(){
//   cron.test();
// })

app.post('/scrape',scrapeTools.scrape);

app.listen(port);

console.log('Listening on port' + port);

module.exports = app;
