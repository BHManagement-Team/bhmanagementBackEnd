let models = require('../../model/account');
var response = { error: false, success: false, data: null }

let retrieveAll = (req, res) => {
    models.find({ username: req.body.username }, (err, result) => {
        if (err) {
            response.status = 200
            response.error = false
            response.success = true
            response.data = result
            response.message = "no result"
            // response = { error: { body: err, message: "no result", status: true }, success: false, data: null }
        } else {
            response.status = 200
            response.error = false
            response.success = true
            response.data = result
            // response = { error: false, success: true, data: account }
        }
    }).catch(err => {
        if (err) {
            response.status = 400
            response.error = true
            response.success = false
            response.data = err
            // response = { error: { body: err, message: "service unavailable", status: true }, success: false, data: null }
        }
    });
    res.status(200).send(response);
}

module.exports = { retrieveAll }
