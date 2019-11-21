const AccountModel = require('../../../model/account');

let response = {}

let createAccount = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let Account = new AccountModel.Account({
        username,
        password
    })
    Account.save()
        .then(
            account => {
                response.error = false
                response.status = 200
                response.success = true
                response.data = account
                response.message = "Successfully Created Account!"
                res.send(response);
                //response = { error: false, success: true, data: account }
            })
        .catch(err => {
            if (err) {
                response.status = 503
                response.error = true
                response.success = false
                response.data = err
                response.message = "Service Unavailable!"
                res.send(response);
                //response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
            }
        });
    // res.send(response);
}
module.exports = { createAccount }
