const PaymentModel = require('../../../model/paymentDetails');
let response = { error: false, success: false }

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
                    res.send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Payment Retrieved Successfully!"
                    res.send(response)
                }
            })
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        res.send(response)
    }
}


let retrieveOnePayment = (req, res) => {
    if (req.body.token != null) {
        PaymentModel.Payment.findOne({ _id: req.body.id },
            (err, data) => {
                if (err || !data.length) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No payment found to retrieve!"
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
        response.message = "Service Unavailable!"
        res.send(response)
    }
}

let retrievePaymentbyId = (req, res) => {
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
                    res.send(response)
                } else {    
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Payment Retrieved Successfully!"
                    res.send(response)
                }
            })
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.message = "Service Unavailable!"
        res.send(response)
    }
}
module.exports = { retrieveAllPayments, retrieveOnePayment, retrievePaymentbyId }
