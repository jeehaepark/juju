// Your accountSid and authToken from twilio.com/user/account
//sudo npm install -g twilio

var config = require('./../config');
var client = require('twilio')(config.accountSid, config.authToken);


var req={body: {}};
var itemNickname= req.body.nickName || 'poop';
var currentPrice = req.body.currentPrice || '$3.50';
var itemUrl = req.body.Url || 'http://www.amazon.com/dp/B00I15SB16/ref=ods_gw_d_h1_eink_bn?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-hero-kindle-A&pf_rd_r=0P45XSR90ARZ24E8SDWJ&pf_rd_t=36701&pf_rd_p=2433108262&pf_rd_i=desktop';
var phoneNumber=req.body.phoneNumber || '19524547366';
var message='Hello from Juju!\nThis is a notification that the item you were watching (' + itemNickname + ') is currently ' + currentPrice + ' which is equal to or less than the price you were interested in paying. \nYou can find the item at \n' +itemUrl +'\n Enjoy!' // The body of the text message


//var client = require('twilio')('AC420b878efbf51bb91fb5260ecef6b3b1', '759b77f8c566b9efdf37f7cd786d3bdc');
client.sendMessage({
    to: phoneNumber, // the number for the phone in your pocket
    from:'+16513832409', // your Twilio number
    body: message // The body of the text message
}, function(error, message) {
    // This callback is executed when the request completes
    if (error) {
        console.error('Sorry.  We couldn\'t send the message',error);
    } else {
        console.log('Message sent! Message id: '+message.sid);
    }
});