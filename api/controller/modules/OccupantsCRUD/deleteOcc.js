const OccupantModel = require('../../../model/occupantDetails');
let response = { error: false, success: false }

let deleteOneOccupant = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.occupant.findByIdAndRemove({ _id: req.body.id }, { new: true }, (err, account) => {
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


let deleteOccupantByID = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.occupant.findByIdAndRemove({ _id: req.params.id }, { new: true }, (err, account) => {
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


let deleteAllOccupants = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.occupant.deleteMany({}, (err, account) => {
            if (err) {
                response.error = true
                response.status = 404
                response.success = false
                response.data = err
                response.message = "No occupant found to delete! "
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

module.exports = { deleteOccupantByID, deleteOneOccupant, deleteAllOccupants }
