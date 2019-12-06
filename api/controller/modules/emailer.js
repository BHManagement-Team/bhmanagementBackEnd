
//IMPORTANT NOTE!!!
//REMOVE API KEY BEFORE PUSHING TO GITHUB
const fs = require('fs');
var template = fs.readFileSync('./template.html');
template = template.toString();

let emailer = (receiver_email) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("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"); 
    const msg = {
        to:receiver_email,
        from: 'BHM@protonmail.com',
        cc:   'chillajean.cabungcag@student.passerellesnumeriuqes.org',
        subject: 'Boarding House Billing Notification',
        text: 'It is all ready your billing date. The management is waiting for your payment',
        html: template,
    };
    if (sgMail.send(msg)) {
        console.log("Billing Notification Sent");
    } else {
        console.log("Billing Notification Error");
        
    }
    sgMail.send(msg);
}

module.exports = { emailer }
