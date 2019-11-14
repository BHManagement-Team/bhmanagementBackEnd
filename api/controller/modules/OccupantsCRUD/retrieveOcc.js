const OccupantModel = require('../../../model/occupantDetails');
let response = { error: false, success: false }

let retrieveAllOccupants = (req, res) => {
    OccupantModel.occupantSchema.find({}, (err, account) => {
        if (err) {
            response.error = true
            response.status= 404
            response.success= false
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
    res.send(response);
}


let retrieveOneOccupant = (req, res) => {
    OccupantModel.occupantSchema.findOne({_id: req.body.id},
         (err, account) => {
        if (err) {
            response.error = true
            response.status= 404
            response.success= false
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
    res.send(response);
}


let retrieveOccbyId = (req, res) => {
    OccupantModel.occupantSchema.findOne({_id: req.params.id},
         (err, account) => {
        if (err) {
            response.error = true
            response.status= 404
            response.success= false
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
    res.send(response);
}

module.exports = {retrieveAllOccupants, retrieveOneOccupant, retrieveOccbyId }
