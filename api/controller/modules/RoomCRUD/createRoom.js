
const RoomModel = require('../../../model/roomDetails');

let response = {}

let createRoom = (req, res) => {
    if (req.body.token != null) {
        let room_name = req.body.room_name;
        let room_floor = req.body.room_floor;
        let room_capacity = req.body.room_capacity;
        let room_price = req.body.room_price;

        let Room = new RoomModel.Room({
            room_name,
            room_floor,
            room_capacity,
            room_price
        })
        Room.save()
            .then(
                data => {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Room Added Successfully!"
                    res.send(response);
                })
            .catch(err => {
                response.error = true
                response.success = false
                response.status = 503
                response.data = err
                response.message = "Service Unavailable!"
                res.send(response);
            });
    }
    else {
        response.error = true
        response.auth = false
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        res.send(response);
    }
}

module.exports = { createRoom }
