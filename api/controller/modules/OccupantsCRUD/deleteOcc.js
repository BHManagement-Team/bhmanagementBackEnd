const OccupantModel= require('../../../model/occupantDetails');
let response = { error: false, success: false }

let deleteOneOccupant = (req, res) => {
    OccupantModel.occupantSchema.findByIdAndRemove({ _id: req.body.id }, { new: true }, (err, account) => {
        if (err) {
            response.error = true
            response.status= 404
            response.success= false
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
    res.send(response);
}


let deleteOccupantByID = (req, res) => {
    OccupantModel.occupantSchema.findByIdAndRemove({ _id: req.params.id }, { new: true }, (err, account) => {
        if (err) {
            response.error = true
            response.status= 404
            response.success= false
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
    res.send(response);
}


let deleteAllOccupants = (req, res) => {
    OccupantModel.occupantSchema.deleteMany({},(err, account) => {
        if (err) {
            response.error = true
            response.status= 404
            response.success= false
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
    res.send(response);
}




module.exports = { deleteOccupantByID ,deleteOneOccupant, deleteAllOccupants }
