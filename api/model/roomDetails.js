const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var roomSchema = new Schema ({
    room_floor: {
        type: Number,
        required: true
    },
    room_name: {
        type: String,
        required: true
    },
    room_capacity: {
        type: String,
        required: true
    },
    room_price: {
        type: Number,
        required: true
    }
})
var roomSchema = mongoose.model('roomDetails', roomSchema)
