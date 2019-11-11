let models = require('../../model/account');
var response = { error: false, success: false, data: null }

module.exports = (req, res) => {

    let username = req.body.username;
    let password = req.body.password;
    let account = new models({
        username,
        password
    });
    account.save()
        .then(result => {
            response.status= 200
            response.error = false
            response.success = true
            response.data =result
        })
        .catch(err => {
            response.status = 400
            response.error = true
            response.success = false
            response.data = err
        })
    res.status(response.status).send(response)
}
