const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var occupantSchema = new Schema({
    roomID: {
        type: roomID,
        required: true
    },
    occupantName: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
        collection: "occupantDetails"
    })
var occupantSchema = mongoose.model('occupantDetails', occupantSchema)