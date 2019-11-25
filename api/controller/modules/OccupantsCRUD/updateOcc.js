const OccupantModel = require('../../../model/occupantDetails');
let response = {}

let updateOccupant = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.occupantSchema.findOneAndUpdate({ _id: req.body.id },
            req.body,
            { new: true },
            (err, data) => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No occupant found to update!"
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

module.exports = { updateOccupant }

