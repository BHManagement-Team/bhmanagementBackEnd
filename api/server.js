const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// // const mongoose = require("mongoose");
// const dbConfig = "mongodb://localhost:27017/dbBhm";
global.mongoose = require("mongoose")

//MongoDBConfig_importing
require('./system/dbConfig')

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true,
    limit: "20mb"
}));
app.use(bodyParser.json({
    limit: "20mb"
}));

//old_routes
const router = require('./router')
app.use("/bhm", router);

//new_routes
const room = require('./controller/modules/RoomCRUD/room_routes');
app.use("/bhm", room.room_routes) //room_routes

const occupant = require('./controller/modules/OccupantCRUD/occupant_routes');
app.use("/bhm", occupant.occupante_routes) //occupante_routes

const account = require('./controller/modules/AccountCRUD/account_routes');
app.use("/bhm", account.account_routes) //account_routes

const payments = require('./controller/modules/PaymentCRUD/payment_routes');
app.use("/bhm", payments.pay_routes) //account_routes

// app.all("*", (req, res) => {
//     console.log("<404> API NOT EXIST!");
//     return res.status(200).send({
//         message: "<404> API NOT EXIST!"
//     })
// })


//importing the cronJob
const cron_job = require('./controller/modules/cronJob')

app.listen(PORT, "0.0.0.0", () => {
    cron_job.cronJob();
    console.log("Server is running in PORT.., " + PORT);
})