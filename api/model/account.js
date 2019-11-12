const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var accountSchema = new Schema({
    username: String,
    password: String
}
,{collection: "accounts"}
)
var Account = mongoose.model('Account', accountSchema)

module.exports = { Account };