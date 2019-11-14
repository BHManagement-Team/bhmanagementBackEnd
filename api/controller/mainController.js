const modules = {
    createAccount: require("./modules/AccountCRUD/create"),
    login: require("./modules/AccountCRUD/login"),
    retrieve: require("./modules/AccountCRUD/retrieve"),
    update: require("./modules/AccountCRUD/update"),
    delete: require("./modules/AccountCRUD/delete"),
    occCreate: require("./modules/OccupantsCRUD/createOcc"),
    occRetrieve: require("./modules/OccupantsCRUD/retrieveOcc"), 
    occUpdate: require("./modules/OccupantsCRUD/updateOcc"),
    occDelete: require("./modules/OccupantsCRUD/deleteOcc"),
    roomCreate: require("./modules/RoomCRUD/createRoom")
}
//CRUD for Accounts
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

let retrievebyId = (req, res)=>{
    modules.retrieve.retrievebyId(req, res)
}

let update = (req, res)=>{
    modules.update.update(req, res)
}

let updateByID = (req, res)=>{
    modules.update.updateByID(req, res)
}

let deleteAll = (req, res)=>{
    modules.delete.deleteAll(req, res)
}

let deleteOne = (req, res)=>{
    modules.delete.deleteOne(req, res)
}

let deleteByID = (req, res)=>{
    modules.delete.deleteOneByID(req, res)
}

//CRUD for Occupants

let occCreate = (req, res)=>{
    modules.occCreate.createOcc(req,res)
}

let occRetrieveAll = (req, res) => {
    modules.occRetrieve.retrieveAllOccupants(req, res)
}

let occRetrieveOne = (req, res)=>{
    modules.occRetrieve.retrieveOneOccupant(req, res)
}

let occRetrievebyId = (req, res)=>{
    modules.occRetrieve.retrieveOccbyId(req, res)
}

let occUpdate = (req, res)=>{
    modules.occUpdate.updateOccupant(req, res)
}

let occDeleteAll = (req, res)=>{
    modules.occDelete.occDeleteAll(req, res)
}

let occDeleteOne = (req, res)=>{
    modules.occDelete.deleteOneOccupant(req, res)
}

let occDeleteByID = (req, res)=>{
    modules.occDelete.deleteOccupantByID(req, res)
}

//CRUD for Rooms

let roomCreate = (req, res)=>{
    modules.roomCreate.createRoom(req,res)
}


module.exports = { create, retrieveAll, retrieveOne , retrievebyId, update, updateByID, deleteAll, deleteOne, deleteByID, occCreate ,
    occRetrieveAll , occRetrieveOne,  occRetrievebyId, occUpdate, occDeleteAll, occDeleteOne, occDeleteByID,
    roomCreate
};