const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var roomSchema = new Schema ({
    roomFloor: {
        type: Number,
        required: true
    },
    roomName: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    roomSize: {
        type: String,
        required: true
    },
    roomSharing: {
        type: String,
        required: true
    },
    roomRentPrice: {
        type: Number,
        required: true
    }
})
var roomSchema = mongoose.model('roomDetails', roomSchema)
