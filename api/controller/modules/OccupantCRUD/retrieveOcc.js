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
        OccupantModel.Occupant.findOne({ _id: req.body.id },
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


let retrieveOccbyId = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.Occupant.findOne({ _id: req.params.id },
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



let retrieveFemaleOcc = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.Occupant.count({ 'occupant_gender': 'female' },
            (err, data) => {
                if (err || data == 0) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No Occupant Gender found to retrieve!"
                    return res.status(200).send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Female Occupants Counted Successfully!"
                    return res.status(200).send(response)
                }
            })
    }
}



let retrieveMaleOcc = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.Occupant.count({ 'occupant_gender': 'male' },
            (err, data) => {
                if (err || data == 0) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No Occupant Gender found to retrieve!"
                    return res.status(200).send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Male Occupants Counted Successfully!"
                    return res.status(200).send(response)
                }
            })
    }
}

let retrievetotal = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.Occupant.count()
        .exec(
            (err, data) => {
                if (err || data == 0) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No Occupant Gender found to retrieve!"
                    return res.status(200).send(response)
                } else {
                    console.log(data);

                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Male Occupants Counted Successfully!"
                    return res.status(200).send(response)
                }
            })
    }
}




module.exports = { retrieveAllOccupants, retrieveOneOccupant, retrieveOccbyId, retrieveFemaleOcc, retrieveMaleOcc, retrievetotal }
