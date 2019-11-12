let models = require('../../model/account');
var response = { error: false, success: false, data: null }

let deleteOne = (req, res) => {
    models.Account.findByIdAndRemove({ _id: req.body.id }, (err,data) => {
        if (err) {
            response.status = 400
            response.error = true
            response.success = false
            response.message = "No Data from DB!"
            response.data = err
            // res.status(200).send({ error: { body: err, status: true }, success: false })
        } else {
            response.status = 200
            response.error = false
            response.success = true
            response.message = "Successfully Deleted from DB!"
            response.data = data
            // res.status(200).send({ error: false, success: true })
        }
    })
    res.status(200).send(response);
}

let deleteMany = (req, res) => {
    models.Account.deleteMany({}, (err,data) => {
        if (err) {
            response.status = 400
            response.error = true
            response.success = false
            response.data = err
            response.message = "No Data from DB!"
            // res.status(200).send({ error: { body: err, status: true }, success: false })
        } else {
            response.status = 200
            response.error = false
            response.success = true
            response.data = data
            response.message = "Successfully Deleted Many from DB!"
            // res.status(200).send({ error: false, success: true })
        }
    })
    res.status(200).send(response);
}


module.exports = { deleteOne, deleteMany }