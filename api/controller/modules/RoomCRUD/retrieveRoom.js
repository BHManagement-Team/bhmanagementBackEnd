const RoomModel = require('../../../model/roomDetails');
let response = {}

//retrieveActiveRooms
//retrieveAllRooms
let retrieveAllActiveRooms = (req, res) => {
    if (req.body.token != null) {
        //data from frontend
        // { "token": "xxx" }
        RoomModel.Room.find({}, (err, room) => {
            if (err || !room.length) {
                response.error = false
                response.status = 404
                response.success = true
                response.data = null
                response.message = "No Room found!"
                return res.status(200).send(response)
            } else {       
                let active_rooms = []         
                room.forEach(element => {
                    if(element.room_status == true){
                        active_rooms.push(element)
                    }
                });
                response.error = false
                response.success = true
                response.status = 200
                response.data = active_rooms
                response.message = "Retrieve All Active Room Successfully!"
                return res.status(200).send(response);
            }
        })
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


//retrieveAllRooms
let retrieveAllRooms = (req, res) => {
    if (req.body.token != null) {
        //data from frontend
        // { "token": "xxx" }
        RoomModel.Room.find({}, (err, room) => {
            if (err || !room.length) {
                response.error = false
                response.status = 404
                response.success = true
                response.data = null
                response.message = "No Room found!"
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
        ////data from frontend
        // {"token":"xxx",
        //  "room_ID": "5dea2bb6f02fd71220674a4b"}
        let room_ID = req.body.room_ID
        RoomModel.Room.findById({
            _id: room_ID
        }, (err, room) => {
            if (err || !room.length) {
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
    //{"token":"xxx"}
    //req.params.id
    if (req.body.token != null) {
        RoomModel.Room.findById({
            _id: req.params.id
        }, (err, room) => {
            if (err || !room.length) {
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
        res.send(response)
    }
}
//end
module.exports = {
    retrieveAllRooms,
    retrieveOneRoom,
    retrieveRoombyId,
    retrieveAllActiveRooms
}