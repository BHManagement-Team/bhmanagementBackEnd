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
    // {
    //     "token":"xxx",
    //     "room_name":"baddy",
    //     "room_floor":"1",
    //     "room_capacity":3,
    //     "room_price":100,
    //     "room_status":true
    // }
    modules.create.createRoom(req, res)
})


//retrieve
room_routes.route('/retrieveAllRooms').post((req, res) => {
    // { "token": "xxx" }
    modules.retrieve.retrieveAllRooms(req, res)
})
room_routes.route('/retrieveAllActiveRooms').post((req, res) => {
    // { "token": "xxx" }
    modules.retrieve.retrieveAllActiveRooms(req, res) //return all room status == true
})

room_routes.route('/retrieveOneRoom').post((req, res) => {
    // {"token":"xxx",
    //  "room_ID": "5dea2bb6f02fd71220674a4b"}
    modules.retrieve.retrieveOneRoom(req, res) //room_Id in req.body
})

room_routes.route('/retrieveRoomOccupants').post((req, res) => {
    // {"token":"xxx",
    //  "room_ID": "5dea2bb6f02fd71220674a4b"}
    modules.retrieve.retrieveRoomOccupants(req, res) //room_Id in req.body
})
room_routes.route('/retrieveRoomByID/:id').post((req, res) => {
    //{"token":"xxx"}
    //req.params.id
    modules.retrieve.retrieveRoombyId(req, res) //room_Id in req.params
})


//update
room_routes.route('/updateRoom/:id').post((req, res) => {
    // {
    //     "token":"xxx",
    //     "room_name":"helly",
    //     "room_floor":"1",
    //     "room_capacity":3,
    //     "room_price":0,
    //     "room_status":false
    // }
    modules.update.updateRoomById(req, res) //room_Id in req.params
})

room_routes.route('/updateRoom').post((req, res) => {
    // {
    //     "token": "xxx",
    //     "room_ID": "5dea2bc8f02fd71220674a4c",
    //     "room_name": "lusty",
    //     "room_floor": "1",
    //     "room_capacity": 3,
    //     "room_price": 100,
    //     "room_status": true
    // }
    modules.update.updateRoom(req, res) //room_Id in req.body
})

//remove
room_routes.route('/deleteRoomByID/:id').post((req, res) => {
    // {"token":"xxx"}
    //req.params.id
    modules.delete.removeRoomById(req, res) //room_Id in req.params #just update room status to false
})
module.exports = {
    room_routes
}