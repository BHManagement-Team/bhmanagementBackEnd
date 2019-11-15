
const express = require("express");
const routes = express.Router();
const mainController = require('../controller/mainController');
// const jwt = require("jsonwebtoken")

//CRUDaccounts
routes.route('/retrieve').post((req, res) => {
    mainController.retrieve(res);
})

routes.route('/createAccount').post((req, res) => {
    console.log(req.body);    
    mainController.addAccount(req, res);    
})

routes.route('/retrieveAllAccount').post((req, res) => {
    mainController.retrieveAllAccount(req, res);
})

routes.route('/retrieveAccount').post((req, res) => {
    mainController.retrieveOneAccount(req, res);
})

routes.route('/updateAccount').post((req, res) => {
    mainController.updateAccount(req, res);
})

routes.route('/deleteAccount').post((req, res) => {
    mainController.removeAccount(req, res);
})

routes.route('/deleteAllAccount').post((req, res) => {
    mainController.removeAllAccount(req, res);
})

routes.route('/login').post((req, res) => {
    mainController.login(req, res);
})


module.exports = routes