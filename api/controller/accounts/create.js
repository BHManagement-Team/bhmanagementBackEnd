let models = require('../../model/account');
var response = { error: false, success: false, data: null }

let createAccount = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let account = new models.Account({
        username,
        password
    });
    account.save()
        .then(result => {
            response.status = 200
            response.error = false
            response.success = true
            response.data = result
            response.message = "Successfully Created!"
            res.send(response)
        })
        .catch(err => {
            response.status = 503
            response.error = true
            response.success = false
            response.data = err
            response.message = "Service Unavailable!"
            res.send(response)
        })
    // res.send(response)
}

module.exports = { createAccount }