const RoomModel = require('../../../model/roomDetails');
let response = { error: false, success: false }

//updateRoom
let updateRoom = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.findByIdAndUpdate({ _id: req.body.id },
            req.body,
            { upsert: true },
            (err, room) => {
                if (err) {
                    response.error = true
                    response.status = 404
                    response.success = false
                    response.data = err
                    response.message = "Room not Exist"
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = room
                    response.message = "Room Updated Successfully!"
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

//updateRoomById
let updateRoomById = (req, res) => {
    if (req.body.token != null) {
        RoomModel.Room.findByIdAndUpdate({ _id: req.params.id },
            req.body,
            { new: true },
            (err, room) => {
                if (err) {
                    response.error = true
                    response.status = 404
                    response.success = false
                    response.data = err
                    response.message = "Room not Exist"
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = room
                    response.message = "Room Updated Successfully!"
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
module.exports = { updateRoom, updateRoomById }