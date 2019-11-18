const modules = {
    loginAccount: require("./modules/login"),
    createAccount: require("./modules/AccountCRUD/create"),
    retrieve: require("./modules/AccountCRUD/retrieve"),
    update: require("./modules/AccountCRUD/update"),
    delete: require("./modules/AccountCRUD/delete"),
    occCreate: require("./modules/OccupantsCRUD/createOcc"),
    occRetrieve: require("./modules/OccupantsCRUD/retrieveOcc"), 
    occUpdate: require("./modules/OccupantsCRUD/updateOcc"),
    occDelete: require("./modules/OccupantsCRUD/deleteOcc"),
    roomCreate: require("./modules/RoomCRUD/createRoom"),
    roomRetrieve: require("./modules/RoomCRUD/retrieveRoom"),
    roomUpdate: require("./modules/RoomCRUD/updateRoom"), 
    roomDelete: require("./modules/RoomCRUD/deleteRoom")
}
//Login 
let login = (req, res)=>{
    modules.loginAccount.login(req, res)
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

let roomRetrieveAll = (req, res) => {
    modules.roomRetrieve.retrieveAllRooms(req, res)
}

let roomRetrieveOne = (req, res)=>{
    modules.roomRetrieve.retrieveOneRoom(req, res)
}

let roomRetrievebyId = (req, res)=>{
    modules.roomRetrieve.retrieveRoombyId(req, res)
}
let roomUpdate = (req, res)=>{
    modules.roomUpdate.updateRoom(req, res)
}
let roomDeleteAll = (req, res)=>{
    modules.roomDelete.deleteAllRooms(req, res)
}

let roomDeleteOne = (req, res)=>{
    modules.roomDelete.deleteOneRoom(req, res)
}

let roomDeleteByID = (req, res)=>{
    modules.roomDelete.deleteRoomByID(req, res)
}

module.exports = { login, create, retrieveAll, retrieveOne , retrievebyId, update, updateByID, deleteAll, deleteOne, deleteByID, occCreate ,
    occRetrieveAll , occRetrieveOne,  occRetrievebyId, occUpdate, occDeleteAll, occDeleteOne, occDeleteByID,
    roomCreate, roomRetrieveAll, roomRetrieveOne, roomRetrievebyId, roomUpdate, roomDeleteAll, roomDeleteOne, roomDeleteByID
};