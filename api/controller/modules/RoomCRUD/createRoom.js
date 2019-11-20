const RoomModel = require('../../../model/roomDetails');

let response = { error: false, success: false }

let createRoom= (req, res) => {
    let room_name = req.body.room_name;
    let room_floor = req.body.room_floor;
    let room_capacity = req.body.room_capacity;
    let room_price = req.body.room_price;

    let Room = new RoomModel.roomSchema({
        room_name,
        room_floor,
        room_capacity,
        room_price
    })
    Room.save()
        .then(
            data => {
                response = { error: false, success: true, data: data }
            })
        .catch(err => {
            if (err) {
                response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
            }
        });
    res.send(response);
}

module.exports = { createRoom }
