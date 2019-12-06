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


app.all("*", () => {
    console.log("<404> API NOT EXIST!");

})


//importing the cronJob
const cron_job = require('./controller/modules/cronJob')

app.listen(PORT, "0.0.0.0", () => {
    // cron_job.cronJob();
    console.log("Server is running in PORT.., " + PORT);
})