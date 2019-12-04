const express = require("express");
const routes = express.Router();
const mainController = require('../controller/mainController');

//importing one default account for admin
//{"username":"admin","password":"admin"}
const create_admin_account = require('../controller/modules/create_default_account')
routes.route('/install').post((req, res) => {
    create_admin_account.create_default_account(req, res);
})

//billing cycle
const billing = require('../controller/modules/billing')
routes.route('/billing').post((req, res) => {
    billing.billing_cycle(req, res);
});

//Routes for Accounts
routes.route('/login').post((req, res) => {
    mainController.login(req, res);
})
routes.route('/createAccount').post((req, res) => {
    mainController.create(req, res);
})
routes.route('/retrieveAll').post((req, res) => {
    mainController.retrieveAll(req, res);
})
routes.route('/retrieveOne').post((req, res) => {
    mainController.retrieveOne(req, res);
})
routes.route('/retrievebyId/:id').post((req, res) => {
    mainController.retrievebyId(req, res);
})

routes.route('/update').post((req, res) => {
    mainController.update(req, res);
})

routes.route('/deleteAll').post((req, res) => {
    mainController.deleteAll(req, res);
})

routes.route('/deleteOne').post((req, res) => {
    mainController.deleteOne(req, res);
})

routes.route('/deleteByID/:id').post((req, res) => {
    mainController.deleteByID(req, res);
})


// Routes for Occupants
routes.route('/createOccupant').post((req, res) => {
    mainController.occCreate(req, res);
})

routes.route('/retrieveAllOccupants').post((req, res) => {
    mainController.occRetrieveAll(req, res);
})

routes.route('/retrieveOneOccupant').post((req, res) => {
    mainController.occRetrieveOne(req, res);
})

routes.route('/retrieveOccupantsByRoomId/:id').post((req, res) => {
    console.log(">>>>>>>>>");

    mainController.occRetrievebyId(req, res);
})

routes.route('/updateOccupant/:id').post((req, res) => {
    mainController.occUpdate(req, res);
})

routes.route('/deleteAllOccupants').post((req, res) => {
    mainController.occDeleteAll(req, res);
})

routes.route('/deleteOneOccupant').post((req, res) => {
    mainController.occDeleteOne(req, res);
})

routes.route('/deleteOccupantByID/:id').post((req, res) => {
    mainController.occDeleteByID(req, res);
})


//Routes for Rooms
routes.route('/createRoom').post((req, res) => {
    mainController.roomCreate(req, res);
})

routes.route('/retrieveAllRooms').post((req, res) => {
    mainController.roomRetrieveAll(req, res);
})

routes.route('/retrieveOneRoom').post((req, res) => {
    mainController.roomRetrieveOne(req, res);
})

routes.route('/retrieveRoomByID/:id').post((req, res) => {
    mainController.roomRetrievebyId(req, res);
})

routes.route('/updateRoom').post((req, res) => {
    mainController.roomUpdate(req, res);
})

routes.route('/updateRoom/:id').post((req, res) => {
    mainController.roomUpdateById(req, res);
})

routes.route('/deleteAllRooms').post((req, res) => {
    mainController.roomDeleteAll(req, res);
})

routes.route('/deleteOneRoom').post((req, res) => {
    mainController.roomDeleteOne(req, res);
})

routes.route('/deleteRoomByID/:id').post((req, res) => {
    mainController.roomDeleteByID(req, res);
})

//Payment Routes
routes.route('/payment/:id').post((req, res) => {
    mainController.payment_create(req, res);
})

routes.route('/retrieveAllPayments').post((req, res) => {
    mainController.payment_retrieve(req, res);
})

routes.route('/retrieveOnePayment').post((req, res) => {
    mainController.payment_retrieve1(req, res);
})

routes.route('/retrievePaymentByID/:id').post((req, res) => {
    mainController.payment_retrievebyID(req, res);
})

routes.route('/updatePayment').post((req, res) => {
    mainController.payment_update(req, res);
})

routes.route('/deleteAllPayments').post((req, res) => {
    mainController.payment_DeleteAll(req, res);
})

routes.route('/deleteOnePayment').post((req, res) => {
    mainController.payment_DeleteOne(req, res);
})

routes.route('/deletePaymentByID/:id').post((req, res) => {
    mainController.payment_DeleteByID(req, res);
})
module.exports = routes