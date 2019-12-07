const AccountModel = require('../../../model/account');
const Bcrypt = require("bcryptjs");
let response = {}

let update = (req, res) => {
    //object to send here from frontend
    // {
    //     "token":"xxx",
    //     "username": "admin",
    //     "newUsername":"chan",
    //     "oldPassword": "admin",
    //     "newPassword": "chan"
    //     }
    let username = req.body.username
    let newUsername = req.body.newUsername
    let oldPassword = req.body.oldPassword
    let newPassword = req.body.newPassword
    AccountModel.Account.find({ username: username },
        (err, account) => {
            if (err || account == null) {
                response.error = true
                response.success = false
                response.status = 404
                response.data = err
                response.message = "No account found to update!"
                return res.status(200).send(response)
            } else {
                console.log(account)
                Bcrypt.compare(oldPassword, account[0].password)
                    .then(match => {
                        if (match) {
                            account[0].username = newUsername
                            account[0].password = newPassword
                            account[0]
                                .save()
                                .then(() => {
                                    response.error = false
                                    response.success = true
                                    response.status = 200
                                    response.data = account[0]
                                    response.message = "Updated Account Successfully!"
                                    return res.status(200).send(response)
                                })
                                .catch(err => {
                                    if (err) {
                                        response.error = true
                                        response.success = false
                                        response.status = 503
                                        response.data = err
                                        response.message = "Service Unavailable!"
                                        return res.status(200).send(response);
                                    }
                                })
                        } else {
                            response.error = true
                            response.success = false
                            response.status = 200
                            response.data = err
                            response.message = "Password is incorrect!"
                            return res.status(200).send(response)

                        }
                    }).catch(err => {
                        response.error = true
                        response.success = false
                        response.status = 503
                        response.data = err
                        response.message = "Service Unavailable!"
                        return res.status(200).send(response);
                    })
            }
        })
        .catch(err => {
            response.error = true
            response.success = false
            response.status = 503
            response.data = err
            response.message = "Service Unavailable!"
            return res.status(200).send(response);
        });
}

module.exports = { update }