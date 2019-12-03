const RoomModel = require('../../../model/roomDetails');
let response = { error: false, success: false }
//deleteOneRoom
let deleteOneRoom = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.findByIdAndRemove(
            { _id: req.body.id },
            { new: true },
            (err, room) => {
                if (err || room == null) {
                    response.error = true
                    response.status = 404
                    response.success = false
                    response.data = err
                    response.message = "Room not Found!"
                    return res.status(200).send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = room
                    response.message = "Room Deleted Successfully!"
                    return res.status(200).send(response)
                }
            })
            .catch(err => {
                response.error = true
                response.success = false
                response.status = 503
                response.data = err
                response.message = "Service Unavailable!"
                return res.status(200).send(response);
            });
    }
    else {
        response.error = true
        response.auth = false
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(200).send(response);
    }
}
//end

//deleteRoomByID
let deleteRoomByID = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.findByIdAndRemove(
            { _id: req.params.id },
            { new: true },
            (err, room) => {
                if (err || room == null) {
                    response.error = true
                    response.status = 404
                    response.success = false
                    response.data = err
                    response.message = "Room not Found!"
                    return res.status(200).send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = room
                    response.message = "Room Deleted Successfully!"
                    return res.status(200).send(response)
                }
            })
            .catch(err => {
                response.error = true
                response.success = false
                response.status = 503
                response.data = err
                response.message = "Service Unavailable!"
                return res.status(200).send(response);
            });
    }
    else {
        response.error = true
        response.auth = false
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(200).send(response);
    }
}
//end

//deleteAllRooms
let deleteAllRooms = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.deleteMany({}, (err, room) => {
            if (err || room == null) {
                response.error = true
                response.status = 404
                response.success = false
                response.data = err
                response.message = "Room not Found!"
                return res.status(200).send(response)
            } else {
                response.error = false
                response.success = true
                response.status = 200
                response.data = room
                response.message = "All Room Deleted Successfully!"
                return res.status(200).send(response)
            }
        })
            .catch(err => {
                response.error = true
                response.success = false
                response.status = 503
                response.data = err
                response.message = "Service Unavailable!"
                return res.status(200).send(response);
            });
    }
    else {
        response.error = true
        response.auth = false
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(200).send(response);
    }
}
//end

module.exports = { deleteRoomByID, deleteOneRoom, deleteAllRooms }
