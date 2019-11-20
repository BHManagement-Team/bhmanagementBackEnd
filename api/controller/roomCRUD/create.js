let models = require('../../model/roomDetails');
var response = { error: false, success: false, data: null }

let createRoom = (req, res) => {
    let roomName = req.body.roomName;
    let roomFloor = req.body.roomFloor;
    let roomType = req.body.roomType;
    let roomSize = req.body.roomSize;
    let roomSharing = req.body.roomSharing;
    let roomRentPrice = req.body.roomRentPrice;

    let room = new models.Room({
        roomName,
        roomFloor,
        roomType,
        roomSize,
        roomSharing,
        roomRentPrice
    })
}