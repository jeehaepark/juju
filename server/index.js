var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');


var app = express();
var port = process.env.PORT || 3000;

var router = require('./models/database');
var items = require('./models/items');
var histories = require('./models/itemHistories');
var watched = require('./models/watchedItems');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../client')));
require('./routes.js')(app);

app.use(router);
app.use(items);
app.use(histories);
app.use(watched);

app.listen(port);

console.log('Listening on port' + port);

module.exports = app;