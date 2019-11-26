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

//importing one default account for admin
//{"username":"admin","password":"admin"}
const create_admin_account = require('./controller/modules/create_default_account')

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server is running in PORT.., " + PORT);
    create_admin_account.create_default_account();
})