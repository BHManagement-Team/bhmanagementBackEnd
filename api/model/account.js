const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var accountSchema = new Schema({
    username: {type:String,unique:true,required:true},
    password: {type:String,unique:true,required:true}
},
    { collection: "accounts" }
)
var Account = mongoose.model('accounts', accountSchema)

module.exports = { Account };
