const AccountModel = require('../../../model/account');
let response = {}

let deleteOne = (req, res) => {
    AccountModel.Account.findByIdAndRemove({ _id: req.body.id }, { new: true }, (err, account) => {
        if (err ) {
            response.error = true
            response.status = 404
            response.success = false
            response.data = err
            response.message = "No account found to delete!"
            return res.status(response.status).send(response);
        } else {
            response.error = false
            response.status = 200
            response.success = true
            response.data = account
            response.message = "Account Deleted Successfully!"
            return res.status(response.status).send(response);
        }
    }).catch(err => {
        if (err) {
            response.error = true
            response.status = 503
            response.success = false
            response.data = err
            response.message = "Service unavailable!"
            return res.status(response.status).send(response);
        }
    });
}

let deleteOneByID = (req, res) => {
    AccountModel.Account.findByIdAndRemove({ _id: req.params.id }, { new: true }, (err, account) => {
        if (err || account == null) {
            response.error = true
            response.status = 404
            response.success = false
            response.data = err
            response.message = "No account found to delete!"
            return res.status(response.status).send(response);
        } else {
            response.error = false
            response.status = 200
            response.success = true
            response.data = account
            response.message = "Account Deleted Successfully!"
            return res.status(response.status).send(response);
        }
    }).catch(err => {
        if (err) {
            response.error = true
            response.status = 503
            response.success = false
            response.data = err
            response.message = "Service unavailable!"
            return res.status(response.status).send(response);
        }
    });
}


let deleteAll = (req, res) => {
    AccountModel.Account.deleteMany({}, (err, account) => {
        if (err) {
            response.error = true
            response.status = 404
            response.success = false
            response.data = err
            response.message = "No account found!"
            return res.status(response.status).send(response);
        } else {
            response.error = false
            response.status = 200
            response.success = true
            response.data = account
            response.message = "Account Deleted Successfully!"
            return res.status(response.status).send(response);
        }
    }).catch(err => {
            response.error = true
            response.status = 503
            response.success = false
            response.data = err
            response.message = "Service unavailable!"
            return res.status(response.status).send(response);
    });
}

module.exports = { deleteOne, deleteAll, deleteOneByID }
