const port = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router')

const mongoose = require("mongoose");
const dbConfig = "mongodb://localhost:27017/dbBhm";

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err, data) => {
    if (err) {
        console.log("error : " + err);
    } else {
        console.log("Database is connected!");
    }
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
app.use(bodyParser.json({ limit: "20mb" }));

app.use("/bhm", router);

// const fs = require('fs');
//     var template = fs.readFileSync('./template.html');
//     template = template.toString();
//     template = template.replace("_CLAIMCODE_", "Php 20,000.00")

//     const sendMail = (to, content) => {
//         const sgMail = require('@sendgrid/mail');
//         sgMail.setApiKey("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");
//         const msg = {
//             to: to,
//             from: 'BHM@protonmail.com',
//             subject: 'BHM Notification!!',
//             text: 'I love you!',
//             html: content
//         };
//         if (sgMail.send(msg)) {
//             console.log('sent');
//         } else {
//             console.log('error')
//         };
//     };

//     sendMail('chillajean.cabungcag@student.passerellesnumeriques.org', template);


// const Nexmo = require('nexmo');
// const nexmo = new Nexmo({
//     apiKey: "796f72fe",
//     apiSecret: "Ga7VMuKy3118ndml"
// });
// nexmo.message.sendSms(
//     "1234", '+63 975 316 5989', 'Payment Notification...',
//     (err, responseData) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.dir(responseData);
//         }
//     }
// );
// app.post('/send', (req, res) => {
//     // Send SMS
//     nexmo.message.sendSms(
//         config.number, req.body.toNumber, req.body.message, { type: 'unicode' },
//         (err, responseData) => { if (responseData) { console.log(responseData) } }
//     );
// });



app.listen(port, () => {
    console.log("Server is running in port " + port)
})