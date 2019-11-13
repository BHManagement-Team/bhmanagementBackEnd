const modules = {
    createAccount: require("./modules/AccountCRUD/create"),
    login: require("./modules/AccountCRUD/login"),
    retrieve: require("./modules/AccountCRUD/retrieve"),
    update: require("./modules/AccountCRUD/update"),
    delete: require("./modules/AccountCRUD/delete")
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

let deleteAll = (req, res)=>{
    modules.delete.deleteAll(req, res)
}

let deleteOne = (req, res)=>{
    modules.delete.deleteOne(req, res)
}

let login = (req, res) => {
    console.log("entered");
    modules.login.login(Account, req, res)
}

module.exports = { create, login, retrieveAll, retrieveOne , update, deleteAll, deleteOne };