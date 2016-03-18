var notificationController = require('./notificationController');
var sendSMS = require('./sendSMSController');
var sendEmail = require('./sendEmailController.js');

module.exports=function(router){
router.get('/', notificationController.toNotifyGet);
router.post('/', sendSMS.sendTextMessage);
router.get('/email', sendEmail.getAllEmail);
router.post('/email',sendEmail.sendEmail);
//router.put('/api/v1/notifications', notificationController.toNotifyPut);
};