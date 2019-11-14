const port = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router')
const cron = require("node-cron");
let nodemailer = require("nodemailer");

//DBConfig
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

// create mail transporter
// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "chillajean.cabungcag@student.passerellesnumeriques.org",
//         pass: ""
//     }
// });

// // sending emails at periodic intervals
// cron.schedule("* * * * *", function () {
//     console.log("---------------------");
//     console.log("Running Cron Job");
//     let mailOptions = {
//         from: "chillajean.cabungcag@student.passerellesnumeriques.org",
//         to: "christian.gigante@student.passerellesnumeriques.org",
//         subject: `Not a GDPR update ;)`,
//         text: `Hi there, this email was automatically sent by us`
//     };
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             throw error;
//         } else {
//             console.log("Email successfully sent!");
//         }
//     });
// });

app.listen(port, () => {
    console.log("Server is running in port " + port)
})