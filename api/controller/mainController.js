const modules = {
    loginAccount: require("./modules/login"),
    createAccount: require("./modules/AccountCRUD/create"),
    retrieve: require("./modules/AccountCRUD/retrieve"),
    update: require("./modules/AccountCRUD/update"),
    delete: require("./modules/AccountCRUD/delete"),
    occCreate: require("./modules/OccupantCRUD/createOcc"),
    occRetrieve: require("./modules/OccupantCRUD/retrieveOcc"),
    occUpdate: require("./modules/OccupantCRUD/updateOcc"),
    occDelete: require("./modules/OccupantCRUD/deleteOcc"),
    roomCreate: require("./modules/RoomCRUD/createRoom"),
    roomRetrieve: require("./modules/RoomCRUD/retrieveRoom"),
    roomUpdate: require("./modules/RoomCRUD/updateRoom"),
    roomDelete: require("./modules/RoomCRUD/deleteRoom"),
    paymentCreate: require("./modules/PaymentCRUD/createPayment"),
    paymentRetrieve: require("./modules/PaymentCRUD/retrievePayments"),
    paymentUpdate: require("./modules/PaymentCRUD/updatePayment"),
    paymentDelete: require("./modules/PaymentCRUD/deletePayment")

}
//Login 
let login = (req, res) => {
    modules.loginAccount.login(req, res)
}

//CRUD for Accounts
let create = (req, res) => {
    modules.createAccount.createAccount(req, res)
}

let retrieveAll = (req, res) => {
    modules.retrieve.retrieveAll(req, res)
}

let retrieveOne = (req, res) => {
    modules.retrieve.retrieveOne(req, res)
}

let retrievebyId = (req, res) => {
    modules.retrieve.retrievebyId(req, res)
}

let update = (req, res) => {
    modules.update.update(req, res)
}

let updateByID = (req, res) => {
    modules.update.updateByID(req, res)
}

let deleteAll = (req, res) => {
    modules.delete.deleteAll(req, res)
}

let deleteOne = (req, res) => {
    modules.delete.deleteOne(req, res)
}

let deleteByID = (req, res) => {
    modules.delete.deleteOneByID(req, res)
}

//CRUD for Occupants

let occCreate = (req, res) => {
    modules.occCreate.createOcc(req, res)
}

let occRetrieveAll = (req, res) => {
    modules.occRetrieve.retrieveAllOccupants(req, res)
}

let occRetrieveOne = (req, res) => {
    modules.occRetrieve.retrieveOneOccupant(req, res)
}

let occRetrievebyId = (req, res) => {
    modules.occRetrieve.retrieveOccbyId(req, res)
}

let occUpdate = (req, res) => {
    modules.occUpdate.updateOccupant(req, res)
}

let occDeleteAll = (req, res) => {
    modules.occDelete.deleteAllOccupants(req, res)
}

let occDeleteOne = (req, res) => {
    modules.occDelete.deleteOneOccupant(req, res)
}

let occDeleteByID = (req, res) => {
    modules.occDelete.deleteOccupantByID(req, res)
}

//CRUD for Rooms
let roomCreate = (req, res) => {
    modules.roomCreate.createRoom(req, res)
}

let roomRetrieveAll = (req, res) => {
    modules.roomRetrieve.retrieveAllRooms(req, res)
}

let roomRetrieveOne = (req, res) => {
    modules.roomRetrieve.retrieveOneRoom(req, res)
}

let roomRetrievebyId = (req, res) => {
    modules.roomRetrieve.retrieveRoombyId(req, res)
}
let roomUpdate = (req, res) => {
    modules.roomUpdate.updateRoom(req, res)
}
let roomUpdateById = (req, res) => {
    modules.roomUpdate.updateRoomById(req, res)
}
let roomDeleteAll = (req, res) => {
    modules.roomDelete.deleteAllRooms(req, res)
}

let roomDeleteOne = (req, res) => {
    modules.roomDelete.deleteOneRoom(req, res)
}

let roomDeleteByID = (req, res) => {
    modules.roomDelete.deleteRoomByID(req, res)
}
//CRUD for Payments
let payment_create = (req, res) => {
    modules.paymentCreate.payment(req, res)
}
let payment_retrieve = (req, res) => {
    modules.paymentRetrieve.retrieveAllPayments(req, res)
}
let payment_retrieve1 = (req, res) => {
    modules.paymentRetrieve.retrieveOnePayment(req, res)
}
let payment_retrievebyID = (req, res) => {    
    modules.paymentRetrieve.retrievePaymentbyId(req, res)
}
let payment_update = (req, res) => {
    modules.paymentUpdate.updatePayment(req, res)
}

let payment_DeleteAll = (req, res) => {
    modules.paymentDelete.deleteAllPayments(req, res)
}

let payment_DeleteOne = (req, res) => {
    modules.paymentDelete.deleteOnePayment(req, res)
}

let payment_DeleteByID = (req, res) => {
    modules.paymentDelete.deletePaymentByID(req, res)
}

module.exports = {
    login, create, retrieveAll, retrieveOne, retrievebyId, update, updateByID, deleteAll, deleteOne, deleteByID, occCreate,
    occRetrieveAll, occRetrieveOne, occRetrievebyId, occUpdate, occDeleteAll, occDeleteOne, occDeleteByID,
    roomCreate, roomRetrieveAll, roomRetrieveOne, roomRetrievebyId, roomUpdate, roomUpdateById, roomDeleteAll, roomDeleteOne, roomDeleteByID, payment_create, payment_retrieve, payment_retrieve1, payment_retrievebyID, payment_update, payment_DeleteAll, payment_DeleteOne, payment_DeleteByID
};
