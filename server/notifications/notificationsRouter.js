var notificationController = require('./notificationController')
module.exports=function(router){
router.get('/', notificationController.toNotifyGet);
//router.put('/api/v1/notifications', notificationController.toNotifyPut);
};