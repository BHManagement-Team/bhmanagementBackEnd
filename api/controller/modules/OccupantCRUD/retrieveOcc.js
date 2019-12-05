const OccupantModel = require('../../../model/occupantDetails');
let response = {}

let retrieveAllOccupants = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.Occupant.find({}, (err, data) => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 404
                response.data = err
                response.message = "No Occupant found to retrieve!"
                return res.status(200).send(response)
            } else {
                response.error = false
                response.success = true
                response.status = 200
                response.data = data
                response.message = "Occupant Retrieved Successfully!"
                return res.status(200).send(response)
            }
        }).catch(err => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 503
                response.data = err
                response.message = "Service Unavailable!"
                return res.status(200).send(response)
            }
        });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}

let retrieveOneOccupant = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.Occupant.findOne({
                _id: req.body.id
            },
            (err, data) => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No Occupant found to retrieve!"
                    return res.status(200).send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Occupant Retrieved Successfully!"
                    return res.status(200).send(response)
                }
            }).catch(err => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 503
                response.data = null
                response.message = err.errmsg
                return res.status(200).send(response)
            }
        });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}

//retrieve ROOM occupants
let retrieveRoomOccbyId = (req, res) => {
    // {
    //     "token": "xxx",
    //     "room_ID": "5de7cfa0c0343214c8692f91"
    // }
    if (req.body.token != null) {
        let room_ID = req.body.room_ID
        OccupantModel.Occupant.find({})
            .populate('room_ID')
            .exec((err, data) => {
                if (!data.length || err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No Occupant found to retrieve!"
                    return res.status(200).send(response)
                } else {
                    console.log("good");


                    var room_occupants = []
                    data.forEach(element => {
                        console.log(element.room_ID);

                        // if (element.room_ID._id == room_ID) {
                        //     room_occupants.push(element)
                        // }
                    })
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.auth = true
                    response.data = room_occupants
                    response.message = "Occupant/s in Room Retrieved Successfully!"
                    return res.status(200).send(response)
                }
            })
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}

module.exports = {
    retrieveAllOccupants,
    retrieveOneOccupant,
    retrieveRoomOccbyId
}