const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
var Payment = mongoose.model('paymentDetails', paymentSchema)

module.exports = { Payment }
