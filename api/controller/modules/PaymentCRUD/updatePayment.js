const PaymentModel = require('../../../model/paymentDetails');
let response = {  }

let updatePayment = (req, res) => {
    if (req.body.token != null) {
        PaymentModel.payment.findOneAndUpdate({ _id: req.body.id },
            req.body,
            { new: true },
            (err, data) => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No payment found to update!"
                    res.send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Payment Retrieved Successfully!"
                    res.send(response)
                }
            }).catch(err => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 503
                    response.data = err
                    response.message = "Service Unavailable!"
                    res.send(response)
                }
            });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        res.send(response)
    }
}

module.exports = { updatePayment }

