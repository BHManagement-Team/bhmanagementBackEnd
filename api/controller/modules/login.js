const LoginModel = require('../../model/account');
const jwt = require("jsonwebtoken");
const config = require("../../system/config")
var response = { error: false, success: false, data: null }

let login = (req, res) => {
    LoginModel.Account.findOne({ username: req.body.username }, (err, result) => {
        if (err) {
            response.status = 404
            response.success = true
            response.data = result
            response.auth = false
            response.message = "Account not found!"
        }
        if (result != null) {
            if (result.password === req.body.password) {
                var token = jwt.sign({
                    result
                }, config.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    })
                response.token = token
                response.status = 200
                response.success = true
                response.data = result
                response.auth = true
                response.message = "Successfully Login!"
            }
            else {
                response.token = null
                response.success = false
                response.auth = false
                response.status = 404
                response.data = null
                response.message = "Incorrect Password!"
            }
        }
        else if (result == null) {
            response.token = null
            response.success = false
            response.auth = false
            response.status = 404
            response.data = null
            response.message = "Username Not Found!"
        }
    })
        .catch(err => {
            if (err) {
                response.auth = false
                response.status = 503
                response.error = true
                response.data = err
                response.message = "Service Unavailable!"
            }
        });
    res.send(response);
}
module.exports = { login }
