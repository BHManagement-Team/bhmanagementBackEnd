const AccountModel = require('../../model/account');
let response = { error: false, success: false }

let update = (req, res) => {
    var query = { username: req.body.username, password: req.body.password };
    req.newData.username = req.body.username;
    req.newData.password = req.body.password;

    AccountModel.Account.findOneAndUpdate(query, req.newData, { upsert: true },
        (err, account) => {
            if (err) {
                response.error = true
                response.status = 404
                response.success = false
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

module.exports = { update }
