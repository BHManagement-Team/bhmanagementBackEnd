const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var paymentSchema = new Schema({
    occupantID: {
        type: occupantID,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
        collection: "paymentDetails"
    })
var paymentSchema = mongoose.model('paymentDetails', paymentSchema)