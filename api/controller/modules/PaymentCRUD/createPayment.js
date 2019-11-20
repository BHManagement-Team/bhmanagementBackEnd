//const PaymentModel = require('../../../model/paymentDetails');
let response = { error: false, success: false }
const occupantModel = require('../../../model/occupantDetails')

let payment = (req, res) => {
    let create_payment = {
        amount: req.body.amount,
        billing_date: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    }
    occupantModel.occupant.findOneAndUpdate({ _id: req.params.id },
        { $push: { payments: create_payment } },
        { upsert: true },
        (err, account) => {
            if (err) {
                response.error = true
                response.status = 500
                response.success = false
                response.data = err
                response.message = "No account found to update!"
            } else {
                response = { error: false, success: true, data: account, message: "Updated Successfully!" }
            }
        })
        .catch(err => {
            if (err) {
                response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
            }
        });
    res.send(response);
}
module.exports = { payment }

