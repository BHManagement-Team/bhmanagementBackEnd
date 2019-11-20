const RoomModel = require('../../../model/roomDetails');
let response = { error: false, success: false }

let deleteOneRoom = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.findByIdAndRemove({ _id: req.body.id }, { new: true }, (err, account) => {
            if (err) {
                response.error = true
                response.status = 404
                response.success = false
                response.data = err
                response.message = "No occupant found to delete!"
            } else {
                response = { error: false, success: true, data: account, message: "Room Deleted Successfully!" }
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


let deleteRoomByID = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.findByIdAndRemove({ _id: req.params.id }, { new: true }, (err, account) => {
            if (err) {
                response.error = true
                response.status = 404
                response.success = false
                response.data = err
                response.message = "No occupant found to delete!"
            } else {
                response = { error: false, success: true, data: account, message: "Account Deleted Successfully!" }
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


let deleteAllRooms = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.deleteMany({}, (err, account) => {
            if (err) {
                response.error = true
                response.status = 404
                response.success = false
                response.data = err
                response.message = "No room found to delete! "
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


module.exports = { deleteRoomByID, deleteOneRoom, deleteAllRooms }
