const LoginModel = require('../../model/account');
const jwt = require("jsonwebtoken");
const config = require("../../system/config")
var response = { error: false, success: false }


// let login = (req, res) => {
//     LoginModel.Account.findOne({ username: req.body.username }, { password: req.body.password }, (err, result) => {
//         if (err) {
//             response.status = 404
//             response.success = true
//             response.data = result
//             response.auth = false
//             response.message = "Account not found!"
//         } else {

//             var token = jwt.sign({
//                 result
//             }, config.secret, {
//                     expiresIn: 86400 // expires in 24 hours
//                 })
//             response.token = token
//             response.status = 200
//             response.success = true
//             response.data = result
//             response.auth = true
//             response.message = "Service running!"
//         }
//     })
//         .catch(err => {
//             if (err) {
//                 response.auth = false
//                 response.status = 503
//                 response.error = true
//                 response.data = err
//                 response.message = "Service Unavailable!"
//             }
//         });
//     res.send(response);
// }

let login = (req, res) => {
    var usernamei = req.body.username
    var passwordi = req.body.password
    User.findOne({ username: usernamei }, (err, data) => {
        if (err) {
            return res.send(err)
        }
        if (data != null) {
            var match = bcrypt.compareSync(passwordi, data.password)
            if (match) {
                var acc_token = jwt.sign({ data }, config.secret, { expiresIn: "12h" })
                return res.send(
                    response.status = 200,
                    response.auth = true,
                    response.data = data,
                    response.token = acc_token,
                    response.message = "Successfully Login!"
                )
            } else {
                return res.send(
                    response.status = 404,
                    response.auth = false,
                    response.message = "Incorrect Password!!"
                )
            }
        }
        return res.send(
            response.status = 500,
            response.auth = false,
            response.message = "Username Not Found!!"
        )
    })
}

module.exports = { login }
