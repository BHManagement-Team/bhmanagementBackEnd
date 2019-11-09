
const express = require("express");
const routes = express.Router();
const controller = require('../controller/mainController');

routes.route('/retrieve').post((req,res)=>{
    controller.retrieve(res);
})

routes.route('/login').post((req,res)=>{
    controller.login(req, res);
})


module.exports = routes