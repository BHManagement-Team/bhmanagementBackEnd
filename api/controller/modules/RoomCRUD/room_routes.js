const express = require("express");
const room_routes = express.Router();

//importing ROOM_CRUD
const modules = {
    create: require("./createRoom"),
    retrieve: require("./retrieveRoom"),
    update: require("./updateRoom"),
    delete: require("./deleteRoom"),
}
//create
room_routes.route('/createRoom').post((req, res) => {
    modules.create.createRoom(req, res)
})

//retrieve
room_routes.route('/retrieveAllRooms').post((req, res) => {
    modules.retrieve.retrieveAllRooms(req, res)
})

room_routes.route('/retrieveOneRoom').post((req, res) => {
    modules.retrieve.retrieveOneRoom(req, res) //room_Id in req.body
})

room_routes.route('/retrieveRoomByID/:id').post((req, res) => {
    modules.retrieve.retrieveRoombyId(req, res) //room_Id in req.params
})

room_routes.route('/updateRoom/:id').post((req, res) => {
    modules.update.updateRoomById(req, res) //room_Id in req.params
})

room_routes.route('/updateRoom').post((req, res) => {
    modules.update.updateRoom(req, res) //room_Id in req.body
})

module.exports = { room_routes }