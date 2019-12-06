const PaymentModel = require('../../../model/paymentDetails');
let response = {
    error: false,
    success: false
}

let retrieveAllPayments = (req, res) => {
    if (req.body.token != null) {
        PaymentModel.Payment.find({})
            .populate('occupant_ID')
            .exec((err, data) => {
                if (err || !data.length) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No payment found to retrieve!"
                    return res.status(200).send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Payment Retrieved Successfully!"
                    return res.status(200).send(response)
                }
            })
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}


let retrieveOnePayment = (req, res) => {
    if (req.body.token != null) {
        PaymentModel.Payment.findById({
            _id: req.body.id
        },
            (err, data) => {
                if (err || !data.length) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No payment found to retrieve!"
                    return res.status(200).send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Payment Retrieved Successfully!"
                    return res.status(200).send(response)
                }
            }).catch(err => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 503
                    response.data = err
                    response.message = "Service Unavailable!"
                    return res.status(200).send(response)
                }
            });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}

let retrievePaymentbyId = (req, res) => {
    if (req.body.token != null) {
        PaymentModel.Payment.find({})
            .exec((err, data) => {
                if (!data.length || err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No payment found to retrieve!"
                    return res.status(200).send(response)
                } else {
                    let occupant_payments = []
                    for (let index = 0; index < data.length; index++) {
                        if (data[index].occupant_ID != null && data[index].occupant_ID == req.params.id) {
                            occupant_payments.push(data[index])
                        }
                    }
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = occupant_payments
                    response.message = "Payment Retrieved Successfully!"
                    return res.status(200).send(response)
                }
            })
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}

let retrieveAmounts = (req, res) => {
    if (req.body.token != null) {
        PaymentModel.Payment.aggregate([
            {
                $group: {
                    _id: null,
                    payments: { $sum: "$amount" }
                }
            }
        ]).exec((err, data) => {
            if (err || !data.length) {
                response.error = true
                response.success = false
                response.status = 404
                response.data = err
                response.message = "No payment found to retrieve!"
                return res.status(200).send(response)
            } else {
                console.log(data);
                response.error = false
                response.success = true
                response.status = 200
                response.data = data
                response.message = "Payment Retrieved Successfully!"
                return res.status(200).send(response)
            }
        })
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}



module.exports = {
    retrieveAllPayments,
    retrieveOnePayment,
    retrievePaymentbyId,
    retrieveAmounts
}