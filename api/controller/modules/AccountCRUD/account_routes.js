const express = require("express");
const account_routes = express.Router();

//importing ROOM_CRUD
const modules = {
    install:require("../create_default_account"),
    login:require("../login"),
    create: require("./create"),
    retrieve: require("./retrieve"),
    update: require("./update"),
    delete: require("./delete")
}

//install
account_routes.route('/install').all((req, res) => {
    modules.install.create_default_account(req, res)
})

//login
account_routes.route('/login').post((req, res) => {
    modules.login.login(req, res)
})

//update
account_routes.route('/update').post((req, res) => {
    modules.update.update(req, res)
})


module.exports = { account_routes }