const express = require("express");
const account_routes = express.Router();

//importing ROOM_CRUD
const modules = {
    install: require("../create_default_account"),
    login: require("../login"),
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

account_routes.route('/retrieveAll').post((req, res) => {
    modules.retrieve.retrieveAll(req, res)
})

account_routes.route('/retrieveOne').post((req, res) => {
    modules.retrieve.retrieveOne(req, res)
})

account_routes.route('/retrievebyId').post((req, res) => {
    modules.retrieve.retrievebyId(req, res)
})

account_routes.route('/retrieveAll').post((req, res) => {
    modules.update.retrieveAll(req, res)
})

account_routes.route('/deleteAll').post((req, res) => {
    modules.delete.deleteAll(req, res)
})

account_routes.route('/deleteOne').post((req, res) => {
    modules.delete.deleteOne(req, res)
})

account_routes.route('/deleteById').post((req, res) => {
    modules.delete.deleteOneByID(req, res)
})

module.exports = {
    account_routes
}