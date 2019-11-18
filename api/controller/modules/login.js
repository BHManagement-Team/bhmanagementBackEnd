const LoginModel = require('../../model/account');
const jwt = require("jsonwebtoken");
const config = require("../../system/config")
var response = { error: false, success: false }


let login = (req, res) => {
    LoginModel.Account.findOne({ username: req.body.username }, { password: req.body.password }, (err, result) => {
        if (err) {
            response.status = 404
            response.success = true
            response.data = result
            response.message = "Account not found!"
        } else {

            var token = jwt.sign({
                result
            }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                })
            response.token = token
            response.status = 200
            response.success = true
            response.data = result
            response.message = "Service running!"
        }
    })
        .catch(err => {
            if (err) {
                response.status = 503
                response.error = true
                response.data = err
                response.message = "Service Unavailable!"
            }
        });
    res.send(response);
}
module.exports = { login }
