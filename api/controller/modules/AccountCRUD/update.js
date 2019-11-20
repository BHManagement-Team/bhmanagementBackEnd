const AccountModel = require('../../../model/account');
let response = { error: false, success: false }

let update = (req, res) => {
    if (req.body.token != null) {
        AccountModel.Account.findOneAndUpdate({ _id: req.body.id },
            req.body,
            { new: true },
            (err, account) => {
                if (err) {
                    response.error = true
                    response.status = 500
                    response.success = false
                    response.data = err
                    response.message = "No account found to update!"
                } else {
                    response = { error: false, success: true, data: account, message: "Updated Successfully!" }
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

let updateByID = (req, res) => {
    if (req.body.token != null) {
        AccountModel.Account.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true },
            (err, account) => {
                if (err) {
                    response.error = true
                    response.status = 500
                    response.success = false
                    response.data = err
                    response.message = "No account found to update!"
                } else {
                    response = { error: false, success: true, data: account, message: "Updated Successfully!" }
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

module.exports = { update, updateByID }

