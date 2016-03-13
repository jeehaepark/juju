var scrapeTools = require('./scraping.js');
var itemHistory=require('./db/models/itemHistories.js');
var watchItem=require('./db/models/watchedItems.js');
var addItem=require('./db/models/items.js');
var app = require('./index.js');

module.exports = function (app) {
	app.get('/test', function (req, res) {
		res.send('hello');
	});
  app.post('/scrape',scrapeTools.scrape);
};
