// const Account = require('../model/account');
const modules = {
    login: require("./modules/login"),
    retrieve: require("./modules/retrieve"),
    createAccount: require("./accounts/create"),
    deleteAccount: require("./accounts/delete"),
    retrieveAccount: require("./accounts/retrieve"),
}

let retrieve = (res) => {
    modules.retrieve.retrieveAll(Account, res)
}

let addAccount = (req, res) => {
    modules.createAccount(req, res)
}

let retrieveAllAccount = (req, res) => {
    modules.retrieveAccount.retrieveAll(req, res)
}

let retrieveOneAccount = (req, res) => {
    modules.retrieveAccount.retrieveOne(req, res)
}

let removeAccount = (req, res) => {
    modules.deleteAccount.deleteOne(req, res)
}


let login = (req, res) => {
    console.log("entered");
    modules.login.login(Account, req, res)
}

module.exports = { login, retrieve, addAccount, retrieveAllAccount, retrieveOneAccount, removeAccount };