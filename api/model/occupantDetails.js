const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var occupantSchema = new Schema({
    room_ID: {
        type: Schema.Types.ObjectId,
        ref: 'roomDetails'
    },
    occupant_name: {
        type: String,
        required: true,
        unique: true
    },
    occupant_contact: {
        type: String,
        required: true
    },
    occupant_email: {
        type: String,
        required: true
    },
    occupant_status: {
        type: Boolean,
        required: true,
    },
    date_started: {
        type: String,
        required: true
    }
}, {
    collection: "occupantDetails"
})
var Occupant = mongoose.model('occupantDetails', occupantSchema)

module.exports = {
    Occupant
}