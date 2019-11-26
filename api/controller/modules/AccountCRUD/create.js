const AccountModel = require('../../../model/account');

let response = {}

let createAccount = (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        let Account = new AccountModel.Account({
            username,
            password
        })

        Account.save((err, data) => {
            if (err) {
                response.status = 503
                response.error = true
                response.success = false
                response.data = err
                response.message = "Service Unavailable!"
                res.send(response);
            }
            else {
                response.error = false
                response.status = 200
                response.success = true
                response.data = data
                response.message = "Successfully Registered!"
                res.send(response);
            }
        })
    }
    catch (error) {
        response.status = 503
        response.error = true
        response.success = false
        response.data = error
        response.message = "Service Unavailable!"
        res.send(response);
    }

}
module.exports = { createAccount }
