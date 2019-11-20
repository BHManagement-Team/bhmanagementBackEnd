const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router')
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: "796f72fe",
    apiSecret: "Ga7VMuKy3118ndml"
});

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
//DBConfig
const mongoose = require("mongoose");
const dbConfig = "mongodb://localhost:27017/dbBhm";

mongoose.Promise = global.Promise;
console.log("Connecting to the Server..,");
mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err, data) => {
    if (err) {
        console.log("error : " + err);
    } else {
        console.log("MongoDB is connected!");
    }
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
app.use(bodyParser.json({ limit: "20mb" }));

app.use("/bhm", router);

app.post('/send', (req, res) => {
    // Send SMS
    nexmo.message.sendSms(
        config.number, req.body.toNumber, req.body.message, { type: 'unicode' },
        (err, responseData) => { if (responseData) { console.log(responseData) } }
    );
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server is running in PORT..," + PORT)
})