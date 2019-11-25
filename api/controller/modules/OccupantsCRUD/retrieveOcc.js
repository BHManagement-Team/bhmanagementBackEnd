const OccupantModel = require('../../../model/occupantDetails');
let response = {}

let retrieveAllOccupants = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.occupant.find({}, (err, data) => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 404
                response.data = err
                response.message = "No occupant found to retrieve!"
                res.send(response)
            } else {
                response.error = false
                response.success = true
                response.status = 200
                response.data = data
                response.message = "Occupant Retrieved Successfully!"
                res.send(response)
            }
        }).catch(err => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 503
                response.data = err
                response.message = "Service Unavailable!"
                res.send(response)
            }
        });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        res.send(response)
    }
}

let retrieveOneOccupant = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.occupant.findOne({ _id: req.body.id },
            (err, data) => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No occupant found to retrieve!"
                    res.send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Occupant Retrieved Successfully!"
                    res.send(response)
                }
            }).catch(err => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 503
                    response.data = err
                    response.message = "Service Unavailable!"
                    res.send(response)
                }
            });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        res.send(response)
    }
}


let retrieveOccbyId = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.occupant.findOne({ _id: req.params.id },
            (err, data) => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No occupant found to retrieve!"
                    res.send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Occupant Retrieved Successfully!"
                    res.send(response)
                }
            }).catch(err => {
                if (err) {
                    response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
                }
            });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        res.send(response)
    }
}

module.exports = { retrieveAllOccupants, retrieveOneOccupant, retrieveOccbyId }
