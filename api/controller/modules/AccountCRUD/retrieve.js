const AccountModel = require('../../../model/account');
let response = { error: false, success: false }

let retrieveAll = (req, res) => {
    AccountModel.Account.find({}, (err, account) => {
        if (err) {
            response.error = true
            response.status= 404
            response.success= false
            response.data = err
            response.message = "No account found!" 
        } else {
            response = { error: false, success: true, data: account }
        }
    }).catch(err => {
        if (err) {
            response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
        }
    });
    res.send(response);
}


let retrieveOne = (req, res) => {
    AccountModel.Account.findOne({_id: req.body.id},
         (err, account) => {
        if (err) {
            response.error = true
            response.status= 404
            response.success= false
            response.data = err
            response.message = "No account found!" 
        } else {
            response = { error: false, success: true, data: account }
        }
    }).catch(err => {
        if (err) {
            response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
        }
    });
    res.send(response);
}

module.exports = {retrieveOne, retrieveAll }
