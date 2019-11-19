const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var occupantSchema = new Schema({
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
    room_name: {
        type: String,
        required: true
    },
    room_floor: {
        type: String,
        required: true
    },
    date_started: { 
        type: String, 
        required: true 
    },
    payments:[
        {
            type: Array
        }
    ]
}, { collection: "occupantDetails" }
)
var occupant = mongoose.model('occupantDetails', occupantSchema)
occupantSchema.plugin(uniqueValidator, { message: 'occupant_name must be unique' });

module.exports = { occupant }