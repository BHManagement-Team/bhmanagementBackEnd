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

if (sgMail.send(msg)) {
    console.log("sent");
    
} else {
    console.log("error");
    
}

sgMail.send(msg);