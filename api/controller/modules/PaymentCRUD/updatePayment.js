const PaymentModel = require('../../../model/paymentDetails');
let response = {}

let updatePayment = (req, res) => {
    if (req.body.token != null) {
        let payment_ID = req.params.payment_ID;
        let amount = req.body.amount
        let billing_date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        PaymentModel.Payment.findById({
                _id: payment_ID
            },
            (err, data) => {
                console.log(data);
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No payment found to update !"
                    return res.status(200).send(response)
                } else {
                    data.amount = amount
                    data.billing_date = billing_date
                    data.save()
                        .then(() => {
                            response.error = false
                            response.success = true
                            response.status = 200
                            response.data = null
                            response.message = "Payment Updated Successfully!"
                            return res.status(200).send(response)
                        })
                }
            })
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}

module.exports = {
    updatePayment
}