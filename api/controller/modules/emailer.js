
//IMPORTANT NOTE!!!
//REMOVE API KEY BEFORE PUSHING TO GITHUB
const fs = require('fs');
var template = fs.readFileSync('./template.html');
template = template.toString();

let emailer = (receiver, amount_to_pay) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("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");
    const msg = {
        to: receiver,
        from: 'BHM@protonmail.com',
        subject: 'Boarding House Billing Notification',
        text: 'It is all ready your billing date. The management is waiting for the amount of ' + amount_to_pay,
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
