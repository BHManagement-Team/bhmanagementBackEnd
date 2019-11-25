let models = require('../../model/account');
var response = { error: false, success: false, data: null }

let deleteOne = (req, res) => {
    models.Account.findByIdAndRemove({ _id: req.body.id }, { new: true }, (err, data) => {
        if (err) {
            response.status = 404
            response.error = true
            response.success = false
            response.message = "No Data from DB!"
            response.data = err
            res.send(response)
            // res.status(200).send({ error: { body: err, status: true }, success: false })
        } else {
            response.status = 200
            response.error = false
            response.success = true
            response.message = "Successfully Deleted from DB!"
            response.data = data
            res.send(response)
            // res.status(200).send({ error: false, success: true })
        }
    })
        .catch((err) => {
            response.status = 503
            response.error = true
            response.data = err
            response.message = "Service Unavailable!"
            res.send(response)
        })
    // res.status(200).send(response);
}

let deleteMany = (req, res) => {
    models.Account.deleteMany({}, (err, data) => {
        if (err) {
            response.status = 404
            response.error = true
            response.success = false
            response.data = err
            response.message = "No Data from DB!"
            res.send(response)
            // res.status(200).send({ error: { body: err, status: true }, success: false })
        } else {
            response.status = 200
            response.error = false
            response.success = true
            response.data = data
            response.message = "Successfully Deleted Many from DB!"
            res.send(response)
            // res.status(200).send({ error: false, success: true })
        }
    })
        .then((result) => {
            response.data = result
        })
        .catch((err) => {
            response.status = 503
            response.error = true
            response.data = err
            response.message = "Service Unavailable!"
            res.send(response)
        })
    // res.status(200).send(response);
}


module.exports = { deleteOne, deleteMany }