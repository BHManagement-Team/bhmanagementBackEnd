const Account = require('../model/account');
const modules = {
    login: require("./modules/login"),
    retrieve: require("./modules/retrieve"),
}
let retrieve = (res) => {
    // modules.retrieve.retrieveOne()
    modules.retrieve.retrieveAll(Account, res)
}
let login = (req, res) => {
    console.log("entered");

    modules.login.login(Account, req, res)
}
module.exports = { login, retrieve };