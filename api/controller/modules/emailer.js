// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
let emailer = (to, amount) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey("");
  const msg = {
    to: to, //'christian.gigante@student.passerellesnumeriques.org'
    from: 'christian.gigante@student.passerellesnumeriques.org',
    subject: 'Boarding House Billing Notification',
    text: 'It is all ready your billing date. The management is waiting for the amount of ' + amount,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  console.log("sending .... " + sgMail);

  if (sgMail.send(msg)) {
    console.log("sent");

  } else {
    console.log("error");

  }

  sgMail.send(msg);
}

module.exports = { emailer }