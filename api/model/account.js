const mongoose = require("mongoose");
const Bcrypt = require("bcryptjs");

var AccountSchema = new mongoose.Schema({
    username: {
        type: String,
        unique:true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
}, {
        collection: 'accounts'
    }
);

//hashing password
AccountSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = Bcrypt.hashSync(this.password, 10);
    next();
});

//compare Password
AccountSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, Bcrypt.compareSync(plaintext, this.password));
};


let Account = mongoose.model('account', AccountSchema);
module.exports = { Account }