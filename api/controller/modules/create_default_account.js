const AccountModel = require('../../model/account');
let response = {}

let create_default_account = (req,res) => {
    AccountModel.Account.find({}, (err, account) => {
        if (err || account.length == 0) {
            try {
                let username = "admin";
                let password = "admin";
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
                        console.log(response);
                        return res.status(200).send(response);
                    }
                    else {
                        response.error = false
                        response.status = 200
                        response.success = true
                        response.data = data
                        response.message = "Successfully Registered!"
                        console.log(response);
                        return res.status(200).send(response);
                    }
                })
            }
            catch (error) {
                response.status = 503
                response.error = true
                response.success = false
                response.data = error
                response.message = "Service Unavailable!"
                console.log(response);
                return res.status(200).send(response);
            }
        } else {
            response.error = false
            response.success = true
            response.status = 200
            response.data = account
            response.message = "Default Account Exist = {'username':'admin','password':'admin'}!"
            console.log(response);
            return res.status(200).send(response);
        }
    })
        .catch(err => {
            response.error = true
            response.success = false
            response.status = 503
            response.data = err
            response.message = "Service Unavailable!"
            console.log(response);
            return res.status(200).send(response);
        });
}

module.exports = { create_default_account }
