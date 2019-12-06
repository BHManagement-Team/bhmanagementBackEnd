const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var roomSchema = new Schema({
    room_floor: {
        type: String,
        required: true
    },
    room_name: {
        unique: true,
        type: String,
        required: true,
    },
    room_capacity: {
        type: Number,
        required: true
    },
    room_price: {
        type: Number,
        required: true
    },
    room_status: {
        type: Boolean, //active or inactive
        required: true,
    },
    // room_description: {
    //     type:String,
    //     required:true
    // }
}, {
    collection: "roomDetails"
})

var Room = mongoose.model('roomDetails', roomSchema)

module.exports = { Room }