const OccupantModel = require('../../../model/occupantDetails');
let response = { error: false, success: false }

let updateOccupant = (req, res) => {
    OccupantModel.occupantSchema.findOneAndUpdate({ _id: req.body.id },
        req.body, 
        {new : true},
        (err, account) => {
            if (err) {
                response.error = true
                response.status = 500
                response.success = false
                response.data = err
                response.message = "No account found to update!"
            } else {
                response = { error: false, success: true, data: account , message: "Updated Successfully!"}
            }
        }).catch(err => {
            if (err) {
                response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
            }
        });
    res.send(response);
}

module.exports = { updateOccupant }

