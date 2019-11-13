const AccountModel = require('../../../model/account');

let response = { error: false, success: false }

module.exports.login = (model, req, res) => {
    model.findOne(
        { username: req.body.username, password: req.body.password }, (err, data) => {
            if (err) {
                response.error = { status: true, message: err };
            } else {
                if (!data) {
                    response.error = { status: true, message: "account not found" };
                } else {
                    response.data = data
                }
            }
            res.send(response)
        })
}