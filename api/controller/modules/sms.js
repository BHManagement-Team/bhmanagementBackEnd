const express = require('express');
const app = express();

let sms_sender = (receiver_contact) => {
  const Nexmo = require("nexmo");
  const nexmo = new Nexmo({
    apiKey: "796f72fe",
    apiSecret: "Ga7VMuKy3118ndml"
  });
  nexmo.message.sendSms(
    "1234",
    receiver_contact,
    "Boarding House Payment Notification! *** It is all ready your billing date. The management is waiting for your payment",
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
  );
  app.post("/send", (req, res) => {
    // Send SMS
    nexmo.message.sendSms(
      config.number,
      req.body.toNumber,
      req.body.message,
      { type: "unicode" },
      (err, responseData) => {
        if (responseData) {
          console.log(responseData);
        }
      }
    );
  });
};

module.exports = { sms_sender };
