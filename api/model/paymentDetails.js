const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var paymentSchema = new Schema ({
    paymentID: {
        type: occupantID,
        required: true,
        unique:true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})
var paymentSchema = mongoose.model('paymentDetails', paymentSchema)