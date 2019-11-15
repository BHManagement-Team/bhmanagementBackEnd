// const Account = require('../model/account');
const modules = {
    login: require("./modules/login"),
    retrieve: require("./modules/retrieve"),
    createAccount: require("./accounts/create"),
    retrieveAccount: require("./accounts/retrieve"),
    updateAccount: require("./accounts/update"),
    deleteAccount: require("./accounts/delete"),
}

let retrieve = (res) => {
    modules.retrieve.retrieveAll(Account, res)
}

let addAccount = (req, res) => {
    modules.createAccount.createAccount(req, res)
}

let retrieveAllAccount = (req, res) => {
    modules.retrieveAccount.retrieveAll(req, res)
}

let retrieveOneAccount = (req, res) => {
    modules.retrieveAccount.retrieveOne(req, res)
}

let updateAccount = (req, res) => {
    modules.updateAccount.updateOne(req, res)
}

let removeAccount = (req, res) => {
    modules.deleteAccount.deleteOne(req, res)
}
let removeAllAccount = (req, res) => {
    modules.deleteAccount.deleteMany(req, res)
}

let login = (req, res) => {
    console.log("entered");
    modules.login.login(Account, req, res)
}

module.exports = { login, retrieve, addAccount, retrieveAllAccount, retrieveOneAccount, removeAccount, removeAllAccount, updateAccount };