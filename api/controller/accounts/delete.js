let models = require('../../model/account');
var response = { error: false, success: false, data: null }

module.exports = (req, res) => {
    models.deleteOne({ _id: req.body.id }, (err) => {
        if (err) {
            response.status = 400
            response.error = true
            response.success = false
            response.data = err
            // res.status(200).send({ error: { body: err, status: true }, success: false })
        } else {
            response.status = 200
            response.error = false
            response.success = true
            response.message = "Successfully Deleted from DB!"
            // res.status(200).send({ error: false, success: true })
        }
    })
    res.status(200).send(response);
}