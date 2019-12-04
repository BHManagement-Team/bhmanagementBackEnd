const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var paymentSchema = new Schema({
    occupant_ID: {
        type: Schema.Types.ObjectId,
        ref: 'occupantDetails'
    },
    amount: {
        type: Number,
        required: true
    },
    date_pay: {
        type: String,
        required: true
    },
    updated_At: {
        type: String,
    }

}, {
    collection: "paymentDetails"
})
var Payment = mongoose.model('paymentDetails', paymentSchema)

module.exports = {
    Payment
}