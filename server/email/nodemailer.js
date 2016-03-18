require('dotenv').config();
var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GMAIL_PWD
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "Fred Foo <foo@blurdybloop.com>", // sender address
    to: "jpark2973@gmail.com", // list of receivers
    subject: "Welcome to JuJu ", // Subject line
    html: "<b> THis is html <br> test br </b>" // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});