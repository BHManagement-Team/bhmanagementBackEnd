const AccountModel = require('../../../model/account');
let response = { error: false, success: false }

let retrieveAll = (req, res) => {
    if (req.body.token != null) {
        AccountModel.Account.find({}, (err, account) => {
            if (err) {
                response.error = true
                response.status = 404
                response.success = false
                response.data = err
                response.message = "No account found!"
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


let retrieveOne = (req, res) => {
    if (req.body.token != null) {
        AccountModel.Account.findOne({ _id: req.body.id },
            (err, account) => {
                if (err) {
                    response.error = true
                    response.status = 404
                    response.success = false
                    response.data = err
                    response.message = "No account found!"
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


let retrievebyId = (req, res) => {
    if (req.body.token != null) {
        AccountModel.Account.findOne({ _id: req.params.id },
            (err, account) => {
                if (err) {
                    response.error = true
                    response.status = 404
                    response.success = false
                    response.data = err
                    response.message = "No account found!"
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

module.exports = { retrieveOne, retrieveAll, retrievebyId }
