
const express = require("express");
const routes = express.Router();
const mainController = require('../controller/mainController');


routes.route('/createAccount').post((req,res)=>{
    mainController.create(req,res);
})

routes.route('/retrieveAll').post((req, res)=>{
    mainController.retrieveAll(req, res);
})

routes.route('/retrieveOne').post((req,res)=>{
    mainController.retrieveOne(req, res);
})

routes.route('/update').post((req,res)=>{
    mainController.update(req, res);
})

routes.route('/deleteAll').post((req,res)=>{
    mainController.deleteAll(req, res);
})

routes.route('/deleteOne').post((req,res)=>{
    mainController.deleteOne(req, res);
})

routes.route('/login').post((req,res)=>{
    mainController.login(req, res);
})


module.exports = routes