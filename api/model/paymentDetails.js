const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var paymentSchema = new Schema ({
    occupant_ID: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    billing_date: {
        type: Date,
        required: true
    } 
})
var payment = mongoose.model('paymentDetails', paymentSchema)

module.exports = { payment }