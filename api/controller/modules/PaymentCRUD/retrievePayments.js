const PaymentModel = require('../../../model/paymentDetails');
let response = { error: false, success: false }

let retrieveAllPayments = (req, res) => {
    if (req.body.token != null) {
        PaymentModel.payment.find({}, (err, data) => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 404
                response.data = err
                response.message = "No payment found to retrieve"
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
                response.message = "Service Unavailable"
                res.send(response)
            }
        });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.message = "Service Unavailable"
        res.send(response)
    }
    // PaymentModel.payment.find({occupant_ID: new  mongoose.mongo.ObjectId('5dccf8058adf321b88dc52a7')})
    //     .populate('accountDetails')
    //     .exec((err, data) => {
    //         if (err) {
    //             res.send(err);
    //         }
    //         else {
    //             res.send(data);
    //         }
    //     })
}



let retrieveOnePayment = (req, res) => {
    if (req.body.token != null) {
        PaymentModel.payment.findOne({ _id: req.body.id },
            (err, data) => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No payment found to retrieve"
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
                    response.message = "Service Unavailable"
                    res.send(response)
                }
            });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.message = "Service Unavailable"
        res.send(response)
    }
}
let retrievePaymentbyId = (req, res) => {
    if (req.body.token != null) {
        PaymentModel.payment.findOne({ _id: req.params.id },
            (err, data) => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No payment found to retrieve"
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
                    response.message = "Service Unavailable"
                    res.send(response)
                }
            });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.message = "Service Unavailable"
        res.send(response)
    }
}
module.exports = { retrieveAllPayments, retrieveOnePayment, retrievePaymentbyId }
