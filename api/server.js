const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router')
// // const mongoose = require("mongoose");
// const dbConfig = "mongodb://localhost:27017/dbBhm";
global.mongoose = require("mongoose")

//MongoDBConfig_importing
require('./system/dbConfig')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
app.use(bodyParser.json({ limit: "20mb" }));

//routes
app.use("/bhm", router);

const emailer = require('./controller/modules/emailer')

app.listen(PORT, "0.0.0.0", () => {
    emailer.recepient();
    console.log("Server is running in PORT.., " + PORT);
})