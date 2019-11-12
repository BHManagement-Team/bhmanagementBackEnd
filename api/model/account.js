const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var accountSchema = new Schema({
    username: String,
    password: String
}, {
    collection: "Accounts"
})
var Account = mongoose.model('Accounts', accountSchema)

module.exports = { Account };