const express = require("express");
const pay_routes = express.Router();

//importing ROOM_CRUD
const modules = {
    create: require("./createPayment"),
    retrieve: require("./retrievePayments"),
    update: require("./updatePayment"),
    delete: require("./deletePayment")
}
pay_routes.route('/payment').post((req, res) => {
    modules.create.payment(req, res)
})

//retrieve
pay_routes.route('/retrieveAllPayments').post((req, res) => {
    modules.retrieve.retrieveAllPayments(req, res)
})

pay_routes.route('/retrieveOnePayment').post((req, res) => {
    modules.retrieve.retrieveOnePayment(req, res)
})

pay_routes.route('/retrievePaymentByID').post((req, res) => {
    modules.retrieve.retrievePaymentbyId(req, res)
})

//update
pay_routes.route('/updatePayment').post((req, res) => {
    modules.update.updatePayment(req, res)
})

pay_routes.route('/deleteAllPayments').post((req, res) => {
    modules.delete.deleteAllPayments(req, res)
})

pay_routes.route('/deleteOnePayment').post((req, res) => {
    modules.delete.deleteOnePayment(req, res)
})

pay_routes.route('/deletePaymentByID/:id').post((req, res) => {
    modules.delete.deletePaymentByID(req, res)
})

module.exports = {
    pay_routes
}