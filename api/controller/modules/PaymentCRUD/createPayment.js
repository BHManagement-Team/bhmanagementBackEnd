const PaymentModel = require('../../../model/paymentDetails');
let response = {}

let payment = (req, res) => {
    if (req.body.token != null) {
        let occupant_ID = req.params.id;
        let amount = req.body.amount
        let billing_date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        let create_payment = new PaymentModel.Payment({
            occupant_ID: occupant_ID,
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
                    response.message = "Successfully add Payment!"
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

