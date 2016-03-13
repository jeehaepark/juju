var itemsController = require('./itemsController.js');

module.exports = function (router) {
  console.log('itemRoutes');
  router.post('/', itemsController.addItem);
  router.get('/', itemsController.getAllItems);
  router.put('/:item_id', itemsController.updateItem);
};
