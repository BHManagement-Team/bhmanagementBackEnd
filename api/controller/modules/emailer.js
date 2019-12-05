<<<<<<< HEAD
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("");
const msg = {
  to: 'christian.gigante@student.passerellesnumeriques.org',
  from: 'christian.gigante@student.passerellesnumeriques.org',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
console.log("sending .... " +sgMail  );
=======
>>>>>>> origin/ChristianGigante

//IMPORTANT NOTE!!!
//REMOVE API KEY BEFORE PUSHING TO GITHUB
const fs = require('fs');
var template = fs.readFileSync('./template.html');
template = template.toString();

let emailer = (receiver_email) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(""); 
    const msg = {
        to:receiver_email,
        from: 'BHM@protonmail.com',
        cc:   'christian.gigante@student.passerellesnumeriuqes.org',
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
