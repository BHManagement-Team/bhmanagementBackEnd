const fs = require('fs');
var template = fs.readFileSync('./template.html');
template = template.toString();
template = template.replace("_CLAIMCODE_", "Php 20,000.00")

//IMPORTANT NOTE!!!
//REMOVE API KEY BEFORE PUSHING TO REPOSITORY
const sendMail = (to, content) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("");
    const msg = {
        to: to,
        from: 'BHM@protonmail.com',
        subject: 'BHM Notification!!',
        text: 'I love you!',
        html: content
    };
    if (sgMail.send(msg)) {
        console.log('sent');
    } else {
        console.log('error')
    };
};
sendMail('chillajean.cabungcag@student.passerellesnumeriques.org', template);