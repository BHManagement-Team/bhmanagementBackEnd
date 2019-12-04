const RoomModel = require('../../../model/roomDetails');
let response = {}

//retrieveAllRooms
let retrieveAllRooms = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.find({}, (err, room) => {
                if (err || !room.length) {
                    response.error = true
                    response.status = 404
                    response.success = false
                    response.data = err
                    response.message = "No Room found Here!"
                    return res.status(200).send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = room
                    response.message = "Retrieve All Room Successfully!"
                    return res.status(200).send(response);
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
    } else {
        response.error = true
        response.auth = false
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(200).send(response);
    }
}
//end

//retrieveOneRoom
let retrieveOneRoom = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.findById({
            _id: req.body.id
        }, (err, room) => {
            if (err || room == null) {
                response.error = true
                response.status = 404
                response.success = false
                response.data = err
                response.message = "Room not Exist!"
                return res.status(200).send(response)
            } else {
                response.error = false
                response.success = true
                response.status = 200
                response.data = room
                response.message = "Retrieve One Room Successfully!"
                return res.status(200).send(response)
            }
        })

    } else {
        response.error = true
        response.auth = false
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}
//end

//retrieveRoombyId
let retrieveRoombyId = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.findById({
                _id: req.params.id
            }, (err, room) => {
                if (err || room == null) {
                    response.error = true
                    response.status = 404
                    response.success = false
                    response.data = err
                    response.message = "Room not Exist!"
                    return res.status(200).send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = room
                    response.message = "Retrieve One Room Successfully!"
                    return res.status(200).send(response)
                }
            })
            .catch(err => {
                response.error = true
                response.success = false
                response.status = 503
                response.data = err
                response.message = "Service Unavailable!"
                res.send(response)
            })
    } else {
        response.error = true
        response.auth = false
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        res.send(response)
    }
}
//end
module.exports = {
    retrieveAllRooms,
    retrieveOneRoom,
    retrieveRoombyId
}