const RoomModel = require('../../../model/roomDetails');
let response = {
    error: false,
    success: false
}

//updateRoom
let updateRoom = (req, res) => {
    if (req.body.token != null) {
        ////data from fronend
        // {
        //     "token": "xxx",
        //     "room_ID": "5dea2bc8f02fd71220674a4c",
        //     "room_name": "lusty",
        //     "room_floor": "1",
        //     "room_capacity": 3,
        //     "room_price": 100,
        //     "room_status": true
        // }
        let room_ID = req.body.room_ID
        let room_update = {
            room_floor: req.body.room_floor,
            room_name: req.body.room_name,
            room_capacity: req.body.room_capacity,
            room_price: req.body.room_price,
            room_status: req.body.room_status
        }
        RoomModel.Room.findByIdAndUpdate({ _id: room_ID },
            room_update,
            { new: true },
            (err, room) => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = null
                    response.message = err.message
                    return res.status(200).send(response);
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = room
                    response.message = "Room Updated Successfully!"
                    return res.status(200).send(response);
                }
            })
    } else {
        response.auth = false
        response.error = true
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(200).send(response);
    }
}
//end



//updateRoomById
let updateRoomById = (req, res) => {
    ////data from fronend
    // {
    //     "token":"xxx",
    //     "room_name":"helly",
    //     "room_floor":"1",
    //     "room_capacity":3,
    //     "room_price":0,
    //     "room_status":false
    // }
    if (req.body.token != null) {
        RoomModel.Room.findByIdAndUpdate({ _id: req.params.id },
            req.body,
            { new: true },
            (err, room) => {
                if (err) {
                    response.error = true
                    response.status = 404
                    response.success = false
                    response.data = null
                    response.message = err.errmsg
                    return res.status(200).send(response);
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = room
                    response.message = "Room Updated Successfully!"
                    return res.status(200).send(response);
                }
            })
    } else {
        response.auth = false
        response.error = true
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(200).send(response);
    }
}
//end
module.exports = { updateRoom, updateRoomById }