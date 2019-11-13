const AccountModel = require('../../../model/account');

let response = { error: false, success: false }

let createAccount= (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let Account = new AccountModel.Account({
        username,
        password
    })
    Account.save()
        .then(
            account => {
                response = { error: false, success: true, data: account }
            })
        .catch(err => {
            if (err) {
                response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
            }
        });
    res.send(response);
}
module.exports = { createAccount }
