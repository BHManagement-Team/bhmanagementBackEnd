
const express = require("express");
const routes = express.Router();
const mainController = require('../controller/mainController');

//Routes for Accounts
routes.route('/createAccount').post((req,res)=>{
    mainController.create(req,res);
})
routes.route('/retrieveAll').post((req, res)=>{
    mainController.retrieveAll(req, res);
})
routes.route('/retrieveOne').post((req,res)=>{
    mainController.retrieveOne(req, res);
})
routes.route('/retrievebyId/:id').post((req,res)=>{
    mainController.retrievebyId(req, res);
})

routes.route('/update').post((req,res)=>{
    mainController.update(req, res);
})

routes.route('/updateByID/:id').post((req,res)=>{
    mainController.updateByID(req, res);
})

routes.route('/deleteAll').post((req,res)=>{
    mainController.deleteAll(req, res);
})

routes.route('/deleteOne').post((req,res)=>{
    mainController.deleteOne(req, res);
})

routes.route('/deleteByID/:id').post((req,res)=>{
    mainController.deleteByID(req, res);
})

routes.route('/login').post((req,res)=>{
    mainController.login(req, res);
})

// Routes for Occupants
routes.route('/createOccupant').post((req,res)=>{
    mainController.occCreate(req, res);
})

routes.route('/retriveAllOccupants').post((req, res)=>{
    mainController.occRetrieveAll(req, res);
})

routes.route('/retriveOneOccupant').post((req, res)=>{
    mainController.occRetrieveOne(req, res);
})

routes.route('/retriveOccupantByID/:id').post((req, res)=>{
    mainController.occRetrievebyId(req, res);
})

routes.route('/updateOccupant').post((req,res)=>{
    mainController.occUpdate(req, res);
})

routes.route('/deleteAllOccupants').post((req,res)=>{
    mainController.occDeleteAll(req, res);
})

routes.route('/deleteOneOccupant').post((req,res)=>{
    mainController.occDeleteOne(req, res);
})

routes.route('/deleteOccupantByID/:id').post((req,res)=>{
    mainController.occDeleteByID(req, res);
})


//Routes for Rooms
routes.route('/createRoom').post((req, res)=>{
    mainController.roomCreate(req, res);
})

routes.route('/retrieveAllRooms').post((req, res)=>{
    mainController.roomRetrieveAll(req, res);
})

routes.route('/retrieveOneRoom').post((req, res)=>{
    mainController.roomRetrieveOne(req, res);
})

routes.route('/retrieveRoomByID/:id').post((req, res)=>{
    mainController.roomRetrievebyId(req, res);
})

routes.route('/updateRoom').post((req,res)=>{
    mainController.roomUpdate(req,res);
})

routes.route('/deleteAllRooms').post((req,res)=>{
    mainController.roomDeleteAll(req, res);
})

routes.route('/deleteOneRoom').post((req,res)=>{
    mainController.roomDeleteOne(req, res);
})

routes.route('/deleteRoomByID/:id').post((req,res)=>{
    mainController.roomDeleteByID(req, res);
})

module.exports = routes