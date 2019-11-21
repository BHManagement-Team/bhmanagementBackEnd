
//DBConfig
const mongoose = require("mongoose");
const dbConfig = "mongodb://localhost:27017/dbBhm";


mongoose.Promise = global.Promise;
console.log("Connecting..,");
mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err, data) => {
    if (err) {
        console.log("DB error : " + err);
    } else {
        console.log("MongoDB is Connected!");
    }
});

module.exports = dbConfig;