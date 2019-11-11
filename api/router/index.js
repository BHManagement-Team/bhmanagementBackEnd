
const express = require("express");
const routes = express.Router();
const mainController = require('../controller/mainController');
// const jwt = require("jsonwebtoken")

routes.route('/retrieve').post((req, res) => {
    mainController.retrieve(res);
})

routes.route('/login').post((req, res) => {
    mainController.login(req, res);
})

routes.route('/createAccount').post((req, res) => {
    mainController.addAccount(req,res);
})


routes.route('/deleteAccount').post((req, res) => {
    mainController.removeAccount(req,res);
})


routes.route('/retrieveAllMatchAccount').post((req, res) => {
    mainController.retrieveAllAccount(req,res);
})


module.exports = routes