const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var occupantSchema = new Schema({
    room_ID: {
        type: Schema.Types.ObjectId,
        ref: 'roomDetails'
    },
    room_floor: {
        type: String,
        required: true
    },
    room_name: {
        type: String,
        required: true
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
    occupant_gender: {
        type: String,
        required:true
    },
    occupant_email: {
        type: String,
        required: true
    },
    // occupant_status: {
    //     type: Boolean,
    //     required: true,
    // },
    date_started: {
        type: String,
        required: true
    },
    date_removed: {
        type: String
    }
}, {
    collection: "occupantDetails"
})
var Occupant = mongoose.model('occupantDetails', occupantSchema)

module.exports = {
    Occupant
}