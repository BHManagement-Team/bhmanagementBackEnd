//IMPORTANT NOTE!!!
//REMOVE API KEY BEFORE PUSHING TO GITHUB
const fs = require('fs');
var template = fs.readFileSync('./template.html');
template = template.toString();

let emailer = (receiver_email, amount_to_pay) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("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");
    const msg = {
        to: receiver_email,
        from: 'BHM@protonmail.com',
        cc: 'christian.gigante@student.passerellesnumeriuqes.org',
        // bcc:   'christian.gigante@student.passerellesnumeriuqes.org',
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

module.exports = {
    emailer
}