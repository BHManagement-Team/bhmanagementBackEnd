const AccountModel = require('../../../model/account');
let response = {}

let update = (req, res) => {
    AccountModel.Account.findOneAndUpdate({ _id: req.body.id },
        req.body,
        { new: true },
        (err, account) => {
            if (err || account == null) {
                response.error = true
                response.success = false
                response.status = 404
                response.data = err
                response.message = "No account found to update!"
                res.send(response)
            } else {
                response.error = false
                response.success = true
                response.status = 200
                response.data = account
                response.message = "Updated Account Successfully!"
                res.send(response)
                // response = { error: false, success: true, data: account, message: "Updated Successfully!" }
            }
        })
        .catch(err => {
            response.error = true
            response.success = false
            response.status = 503
            response.data = err
            response.message = "Service Unavailable!"
            res.send(response);
        });
    // res.send(response);
}

let updateByID = (req, res) => {
    console.log(req.body);
    
    AccountModel.Account.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true },
        (err, account) => {
            if (err || account == null) {
                response.error = true
                response.success = false
                response.status = 404
                response.data = err
                response.message = "No account found to update!"
                res.send(response)
            } else {
                response.error = false
                response.success = true
                response.status = 200
                response.data = account
                response.message = "Updated Account Successfully!"
                res.send(response)
                // response = { error: false, success: true, data: account, message: "Updated Successfully!" }
            }
        })
        .catch(err => {
            response.error = true
            response.success = false
            response.status = 503
            response.data = err
            response.message = "Service Unavailable!"
            res.send(response);
        });
    // res.send(response);
}

module.exports = { update, updateByID }

