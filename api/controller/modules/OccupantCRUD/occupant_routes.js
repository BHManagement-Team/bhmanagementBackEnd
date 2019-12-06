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
    modules.retrieve.retrieveOneOccupant(req, res)
})

module.exports = { occupante_routes }