let models = require('../../model/account');
var response = { error: false, success: false, data: null }

let retrieveAll = (req, res) => {
    models.Account.find((err, result) => {
        if (err) {
            response.status = 404
            response.error = false
            response.success = true
            response.data = result
            response.message = "No Document found!"
            // response = { error: { body: err, message: "no result", status: true }, success: false, data: null }
        } else {
            response.status = 200
            response.error = false
            response.success = true
            response.data = result
            response.message = "Successfully Retrieve All!"
            // response = { error: false, success: true, data: account }
        }
    }).catch(err => {
        if (err) {
            response.status = 503
            response.error = true
            response.success = false
            response.data = err
            response.message = "Service Unavailable!"
            // response = { error: { body: err, message: "service unavailable", status: true }, success: false, data: null }
        }
    });
    res.send(response);
}

let retrieveOne = (req, res) => {
    models.Account.find({ _id: req.body.id }, (err, result) => {
        if (err) {
            response.status = 404
            response.success = true
            response.data = result
            response.message = "No Document found!"
            // response = { error: { body: err, message: "no result", status: true }, success: false, data: null }
        } else {
            response.status = 200
            response.success = true
            response.data = result
            response.message = "Successfully Retrieved One!"
            // response = { error: false, success: true, data: account }
        }
    }).catch(err => {
        if (err) {
            response.status = 404
            response.error = true
            response.data = err
            // response = { error: { body: err, message: "service unavailable", status: true }, success: false, data: null }
        }
    });
    res.send(response);
}


module.exports = { retrieveAll, retrieveOne }
