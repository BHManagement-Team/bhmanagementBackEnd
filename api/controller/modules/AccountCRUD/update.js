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
    AccountModel.Account.find({ _id: req.body.id },
            (err, account) => {
                if (err || account == null) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No account found to update!"
                    return res.status(response.status).send(response)
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
                                        return res.status(response.status).send(response)
                                        // console.log("Updated Account Successfully!")
                                    })
                                    .catch(err => {
                                        if (err) {
                                            response.error = true
                                            response.success = false
                                            response.status = 503
                                            response.data = err
                                            response.message = "Service Unavailable!"
                                            return res.status(response.status).send(response);
                                        }
                                        // console.log(err)
                                    })
                            } else {
                                response.error = true
                                response.success = false
                                response.status = 200
                                response.data = err
                                response.message = "Password is incorrect!"
                                return res.status(response.status).send(response)

                            }
                        }).catch(err => {
                            response.error = true
                            response.success = false
                            response.status = 503
                            response.data = err
                            response.message = "Service Unavailable!"
                            return res.status(response.status).send(response);
                        })
                }
            })
        .catch(err => {
            response.error = true
            response.success = false
            response.status = 503
            response.data = err
            response.message = "Service Unavailable!"
            return res.status(response.status).send(response);
        });
}

module.exports = { update }