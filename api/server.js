const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router')

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

app.use("/bhm", router)


app.listen(PORT, "0.0.0.0", () => {
    console.log("Server is running in PORT..," + PORT)
})