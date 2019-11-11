// const Account = require('../model/account');
const modules = {
    login: require("./modules/login"),
    retrieve: require("./modules/retrieve"),
    createAccount: require("./accounts/create"),
    deleteAccount: require("./accounts/delete"),

}

let retrieve = (res) => {
    // modules.retrieve.retrieveOne()
    modules.retrieve.retrieveAll(Account, res)
}

let addAccount = (req, res) => {
    // modules.retrieve.retrieveOne()
    modules.createAccount(req, res)
}

let removeAccount = (req, res) => {
    // modules.retrieve.retrieveOne()
    modules.deleteAccount(req, res)
}


let login = (req, res) => {
    console.log("entered");
    modules.login.login(Account, req, res)
}
module.exports = { login, retrieve, addAccount, removeAccount };