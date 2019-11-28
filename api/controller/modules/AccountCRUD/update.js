const AccountModel = require('../../../model/account');
const Bcrypt = require("bcryptjs");
let response = {}

let update = (req, res) => {
    //object to send here from frontend
    // data: {
    //     username:    String 
    //     oldPassword: String
    //     newPassword: String
    // }
    AccountModel.Account.find({ username: req.body.username },
            (err, account) => {
                if (err || account == null) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No account found to update!"
                    res.send(response)
                } else {
                    console.log(account)
                    Bcrypt.compare(req.body.oldPassword, account[0].password)
                        .then(match => {
                            if (match) {
                                account[0].username = req.body.username
                                account[0].password = req.body.newPassword
                                account[0]
                                    .save()
                                    .then(() => {
                                        response.error = false
                                        response.success = true
                                        response.status = 200
                                        response.data = account[0]
                                        response.message = "Updated Account Successfully!"
                                        res.send(response)
                                        console.log("Updated Account Successfully!")
                                    })
                                    .catch(err => {
                                        if (err) {
                                            response.error = true
                                            response.success = false
                                            response.status = 503
                                            response.data = err
                                            response.message = "Service Unavailable!"
                                            res.send(response);
                                        }
                                        console.log(err)
                                    })
                            } else {
                                response.error = true
                                response.success = false
                                response.status = 200
                                response.data = err
                                response.message = "Password is incorrect!"
                                res.send(response)

                            }
                        }).catch(err => {
                            response.error = true
                            response.success = false
                            response.status = 503
                            response.data = err
                            response.message = "Service Unavailable!"
                            res.send(response);
                        })
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
}

module.exports = { update }