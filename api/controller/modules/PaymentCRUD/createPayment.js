const PaymentModel = require('../../../model/paymentDetails');
let response = {}

let payment = (req, res) => {
    if (req.body.token != null) {
        ////data from frontend
        // {
        //     "token": "xxx",
        //     "amount": 100,
        //     "id": "5de7d0c26bb5c5124cf78c51"
        // }
        let occupant_ID = req.body.id;
        let amount = req.body.amount;
        let date_pay = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

        let create_payment = new PaymentModel.Payment({
            occupant_ID: occupant_ID,
            amount: amount,
            date_pay: date_pay,
            updated_At: null

        })

        create_payment.save()
            .then(
                data => {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Successfully add Payment!"
                    return res.status(200).send(response)
                })
            .catch(err => {
                response.error = true
                response.success = false
                response.status = 503
                response.data = err
                response.message = err.errmsg
                return res.status(200).send(response)
            });

    } else {
        response.auth = false
        response.status = 503
        response.error = true
        response.message = "Service Unavailable!"
        return res.status(200).send(response);
    }

}

module.exports = {
    payment
}