const PaymentModel = require('../../../model/paymentDetails');
let response = {}

let deleteOnePayment = (req, res) => {
    if (req.body.token != null) {
        PaymentModel.Payment.findByIdAndRemove({ _id: req.body.id }, { new: true }, (err, data) => {
            if (err || data == null) {
                response.error = true
                response.success = false
                response.status = 404
                response.data = err
                response.message = "No payment found to delete!"
                return res.status(response.status).send(response)
            } else {
                response.error = false
                response.success = true
                response.status = 200
                response.data = data
                response.message = "Payment Deleted Successfully!"
                return res.status(response.status).send(response)
            }
        }).catch(err => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 503
                response.data = err
                response.message = "Service Unavailable!"
                return res.status(response.status).send(response)
            }
        });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        return res.status(response.status).send(response)
    }
}


let deletePaymentByID = (req, res) => {
    if (req.body.token != null) {
        PaymentModel.Payment.findByIdAndRemove({ _id: req.params.id }, { new: true }, (err, data) => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 404
                response.data = err
                response.message = "No payment found to delete!"
                return res.status(response.status).send(response)
            } else {
                response.error = false
                response.success = true
                response.status = 200
                response.data = data
                response.message = "Payment Deleted Successfully!"
                return res.status(response.status).send(response)
            }
        }).catch(err => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 503
                response.data = err
                response.message = "Service Unavailable!"
                return res.status(response.status).send(response)
            }
        });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        return res.status(response.status).send(response)
    }
}


let deleteAllPayments = (req, res) => {
    if (req.body.token != null) {
        PaymentModel.Payment.deleteMany({}, (err, data) => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 404
                response.data = err
                response.message = "No payment found to delete!"
                return res.status(response.status).send(response)
            } else {
                response.error = false
                response.success = true
                response.status = 200
                response.data = data
                response.message = "Payment Deleted Successfully!"
                return res.status(response.status).send(response)
            }
        }).catch(err => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 503
                response.data = err
                response.message = "Service Unavailable!"
                return res.status(response.status).send(response)
            }
        });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        return res.status(response.status).send(response)
    }
}

module.exports = { deleteOnePayment, deletePaymentByID, deleteAllPayments }
