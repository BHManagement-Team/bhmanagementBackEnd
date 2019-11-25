const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require("./occupantDetails")
var paymentSchema = new Schema({
    occupant_ID: {
        type: Schema.Types.ObjectId, ref: 'occupantDetails'
    },
    amount: {
        type: Number,
        required: true
    },
    billing_date: {
        type: String,
        required: true
    }
})
var payment = mongoose.model('paymentDetails', paymentSchema)

module.exports = { payment }
