const express = require("express");
const occupante_routes = express.Router();

//importing ROOM_CRUD
const modules = {
    create: require("./createOcc"),
    retrieve: require("./retrieveOcc"),
    update: require("./updateOcc"),
    delete: require("./deleteOcc")
}
//create
occupante_routes.route('/createOccupant').post((req, res) => {
    modules.create.createOcc(req, res)
})

//retrieve
occupante_routes.route('/retrieveAllOccupants').post((req, res) => {
    modules.retrieve.retrieveAllOccupants(req, res)
})

occupante_routes.route('/retrieveOneOccupant').post((req, res) => {
    modules.retrieve.retrieveOneOccupant(req, res) //retrieve by req.body
})

occupante_routes.route('/retrieveRoomOcc').post((req, res) => {
    modules.retrieve.retrieveRoomOccbyId(req, res) //retrieve by room occ by id
})

occupante_routes.route('/updateOccupant/:id').post((req, res) => {
    modules.update.updateOccupant(req, res) //retrieve by room occ by id
})

occupante_routes.route('/deleteAllOccupants').post((req, res) => {
    modules.delete.deleteAllOccupants(req, res) //retrieve by room occ by id
})

occupante_routes.route('/deleteOneOccupant').post((req, res) => {
    modules.delete.deleteOneOccupant(req, res) //retrieve by room occ by id
})
occupante_routes.route('/deleteOccupantByID/:id').post((req, res) => {
    modules.delete.removeOneOccupantById(req, res) //retrieve by room occ by id
})
module.exports = {
    occupante_routes
}