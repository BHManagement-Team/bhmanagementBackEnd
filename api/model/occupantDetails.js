const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var occupant = new Schema({
    occupant_name: {
        type: String,
        required: true
    },
    occupant_contact: {
        type: String,
        required: true
    },
    occupant_email: {
        type: String,
        required: true
    },
    room_name: {
        type: String,
        required: true
    },
    room_floor: {
        type: String,
        required: true
    }
}, { collection: "occupantDetails" }
)
var occupantSchema = mongoose.model('occupantDetails', occupant)

module.exports = { occupantSchema }