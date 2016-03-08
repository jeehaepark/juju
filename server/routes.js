var scrapeTools = require('./scraping.js')
var app = require('./index.js')

module.exports = function (app) {
	app.get('/test', function (req, res) {
		res.send('hello')
	});
  app.post('/scrape',scrapeTools.scrape);
  //   res.send('hello')
  // });
	app.get('*', function (req, res) {
		res.redirct('/');
	});
};
