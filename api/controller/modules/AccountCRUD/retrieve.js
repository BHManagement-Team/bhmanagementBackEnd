const AccountModel = require('../../../model/account');
let response = {}

let retrieveAll = (req, res) => {
    AccountModel.Account.find({}, (err, account) => {
        if (err || account.length == 0) {
            response.error = true
            response.status = 404
            response.success = false
            response.data = err
            response.message = "No account found!"
            return res.status(response.status).send(response);
        } else {
            response.error = false
            response.success = true
            response.status = 200
            response.data = account
            response.message = "Retrieve All Accounts Successfully!"
            return res.status(response.status).send(response)
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


let retrieveOne = (req, res) => {
    AccountModel.Account.findOne({ _id: req.body.id },
        (err, account) => {
            if (err || account.length == 0) {
                response.error = true
                response.status = 404
                response.success = false
                response.data = err
                response.message = "No account found!"
                return res.status(response.status).send(response);
            } else {
                response.error = false
                response.success = true
                response.status = 200
                response.data = account
                response.message = "Retrieve One Account Successfully!"
                return res.status(response.status).send(response)
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


let retrievebyId = (req, res) => {
    AccountModel.Account.findOne({ _id: req.params.id },
        (err, account) => {
            if (err || account.length == 0) {
                response.error = true
                response.status = 404
                response.success = false
                response.data = err
                response.message = "No account found!"
                return res.status(response.status).send(response);
            } else {
                response.error = false
                response.success = true
                response.status = 200
                response.data = account
                response.message = "Retrieve One Account Successfully!"
                return res.status(response.status).send(response)
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

module.exports = { retrieveOne, retrieveAll, retrievebyId }
