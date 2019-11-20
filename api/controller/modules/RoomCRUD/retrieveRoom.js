const RoomModel = require('../../../model/roomDetails');
let response = { error: false, success: false }

let retrieveAllRooms = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.find({}, (err, account) => {
            if (err) {
                response.error = true
                response.status = 404
                response.success = false
                response.data = err
                response.message = "No room found!"
            } else {
                response = { error: false, success: true, data: account }
            }
        }).catch(err => {
            if (err) {
                response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
            }
        });
    } else {
        response.auth = false
        response.status = 503
        response.error = true
        response.message = "Service Unavailable!"
    }
    res.send(response);
}


let retrieveOneRoom = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.findOne({ _id: req.body.id },
            (err, account) => {
                if (err) {
                    response.error = true
                    response.status = 404
                    response.success = false
                    response.data = err
                    response.message = "No room found!"
                } else {
                    response = { error: false, success: true, data: account }
                }
            }).catch(err => {
                if (err) {
                    response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
                }
            });
    } else {
        response.auth = false
        response.status = 503
        response.error = true
        response.message = "Service Unavailable!"
    }
    res.send(response);
}


let retrieveRoombyId = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.findOne({ _id: req.params.id },
            (err, account) => {
                if (err) {
                    response.error = true
                    response.status = 404
                    response.success = false
                    response.data = err
                    response.message = "No occupant found!"
                } else {
                    response = { error: false, success: true, data: account }
                }
            }).catch(err => {
                if (err) {
                    response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
                }
            });
    } else {
        response.auth = false
        response.status = 503
        response.error = true
        response.message = "Service Unavailable!"
    }
    res.send(response);
}

module.exports = { retrieveAllRooms, retrieveOneRoom, retrieveRoombyId }
