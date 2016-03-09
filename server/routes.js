var scrapeTools = require('./scraping.js')
var app = require('./index.js')

module.exports = function (app) {
	app.get('/test', function (req, res) {
		res.send('hello');
	});
  app.post('/scrape',scrapeTools.scrape);


  // app.get('/api/users', function (req, res){
  // 	res.json(results);
  // })

  // app.post('api/v1/addItem', function(req, res){
  //   console.log('made it bitches', req.body)
  // });
	// app.get('*', function (req, res) {
	// 	res.redirct('/');
	// });

};
