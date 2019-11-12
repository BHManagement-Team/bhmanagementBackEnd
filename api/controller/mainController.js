const modules = {
    createAccount: require("./modules/create"),
    login: require("./modules/login"),
    retrieve: require("./modules/retrieve"),
    update: require("./modules/update")
}

let create = (req, res) =>{
    console.log("entered");
    modules.createAccount.createAccount(req, res)
}

let retrieveAll = (req, res) => {
    modules.retrieve.retrieveAll(req, res)
}

let retrieveOne = (req, res)=>{
    modules.retrieve.retrieveOne(req, res)
}

let update = (req, res)=>{
    modules.update.update(req, res)
}

let login = (req, res) => {
    console.log("entered");
    modules.login.login(Account, req, res)
}

module.exports = { create, login, retrieveAll, retrieveOne , update};