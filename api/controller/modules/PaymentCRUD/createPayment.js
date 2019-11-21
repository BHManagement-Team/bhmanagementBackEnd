const PaymentModel = require('../../../model/paymentDetails');
let response = {}

let payment = (req, res) => {
    if (req.body.token != null) {
        let id = req.params.id;
        let amount = req.body.amount
        let billing_date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        let create_payment = new PaymentModel.payment({
            occupant_ID: id,
            amount: amount,
            billing_date: billing_date
        })
        create_payment.save()
            .then(
                data => {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Successfully saved an account!"
                    res.send(response)
                })
            .catch(err => {
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
        response.auth = false
        response.status = 503
        response.error = true
        response.message = "Service Unavailable!"
        res.send(response);
    }

}

module.exports = { payment }

