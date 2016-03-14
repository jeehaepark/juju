var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function (app, express) {
  // var router = require('../db/models/users');
  // var items = require('../db/models/items');
  var itemRouter = express.Router();
  // var histories = require('../db/models/itemHistories');
  // var watched = require('../db/models/watchedItems');

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(express.static(path.join(__dirname, './../../client')));
  app.use('/scripts', express.static(__dirname + './../../node_modules/'));
  // require('./../routes.js')(app);

  app.use(router);
  app.use('/api/items', itemRouter);
  app.use(histories);
  app.use(watched);

  require('./../items/itemRoutes.js')(itemRouter);
};

