const OccupantModel = require('../../../model/occupantDetails');
let response = { error: false, success: false }

let retrieveAllOccupants = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.occupant.find({}, (err, account) => {
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

let retrieveOneOccupant = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.occupant.findOne({ _id: req.body.id },
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


let retrieveOccbyId = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.occupant.findOne({ _id: req.params.id },
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

module.exports = { retrieveAllOccupants, retrieveOneOccupant, retrieveOccbyId }
