const AccountModel = require('../../../model/account');
let response = { error: false, success: false }

let deleteOne = (req, res) => {
    if (req.body.token != null) {
        AccountModel.Account.findByIdAndRemove({ _id: req.body.id }, { new: true }, (err, account) => {
            if (err) {
                response.error = true
                response.status = 404
                response.success = false
                response.data = err
                response.message = "No account found to delete!"
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

let deleteOneByID = (req, res) => {
    if (req.body.token != null) {
        AccountModel.Account.findByIdAndRemove({ _id: req.params.id }, { new: true }, (err, account) => {
            if (err) {
                response.error = true
                response.status = 404
                response.success = false
                response.data = err
                response.message = "No account found to delete!"
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

let deleteAll = (req, res) => {
    if (req.body.token != null) {
        AccountModel.Account.deleteMany({}, (err, account) => {
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

module.exports = { deleteOne, deleteAll, deleteOneByID }
