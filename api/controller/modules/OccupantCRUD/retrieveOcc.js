const OccupantModel = require('../../../model/occupantDetails');
let response = {}

let retrieveAllOccupants = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.Occupant.find({}, (err, data) => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 404
                response.data = err
                response.message = "No Occupant found to retrieve!"
                return res.status(200).send(response)
            } else {
                response.error = false
                response.success = true
                response.status = 200
                response.data = data
                response.message = "Occupant Retrieved Successfully!"
                return res.status(200).send(response)
            }
        }).catch(err => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 503
                response.data = err
                response.message = "Service Unavailable!"
                return res.status(200).send(response)
            }
        });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}

let retrieveOneOccupant = (req, res) => {
    if (req.body.token != null) {
        OccupantModel.Occupant.findOne({
                _id: req.body.id
            },
            (err, data) => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No Occupant found to retrieve!"
                    return res.status(200).send(response)
                } else {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Occupant Retrieved Successfully!"
                    return res.status(200).send(response)
                }
            }).catch(err => {
            if (err) {
                response.error = true
                response.success = false
                response.status = 503
                response.data = null
                response.message = err.errmsg
                return res.status(200).send(response)
            }
        });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}

//retrieve ROOM occupants
let retrieveOccbyId = (req, res) => {
    if (req.body.token != null) {
        let room_ID = req.params.id
        OccupantModel.Occupant.find({})
            .populate('room_ID')
            .exec((err, data) => {
                // if (err ) {
                //     response.error = true
                //     response.success = false
                //     response.status = 404
                //     response.data = err
                //     response.message = "No Occupant found to retrieve!"
                //     return res.status(200).send(response)
                // } else {
                //     // let room_occupants = []
                //     // data.forEach(element => {
                //     //     if (element.room_ID._id == room_ID) {
                //     //         room_occupants.push(element)
                //     //     }
                //     // })
                //     response.error = false
                //     response.success = true
                //     response.status = 200
                //     response.data = data
                //     response.message = "Occupant Retrieved Successfully!"
                //     return res.status(200).send(response)
                // }


                if (!data.length || err) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No Occupant found to retrieve!"
                    return res.status(200).send(response)
                } else {
                    // let room_occupants = []
                    // data.forEach(element => {
                    //     if (element.occupant_ID._id == room_ID) {
                    //         room_occupants.push(element)
                    //     }
                    // })
                    return console.log(data);

                    // response.error = false
                    // response.success = true
                    // response.status = 200
                    // response.data = occupant_payments
                    //     response.message = "Occupant Retrieved Successfully!"
                    // return res.status(200).send(response)
                }
            })
        // .catch(err => {
        //     if (err) {
        //         response.error = true
        //         response.success = false
        //         response.status = 503
        //         response.data = null
        //         response.message = err.errmsg
        //         return res.status(200).send(response)
        //     }
        // });
    } else {
        response.error = true
        response.success = false
        response.status = 503
        response.auth = false
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}

module.exports = {
    retrieveAllOccupants,
    retrieveOneOccupant,
    retrieveOccbyId
}


// let retrievePaymentbyId = (req, res) => {
//         if (req.body.token != null) {
//             PaymentModel.Payment.find({})
//                 .populate('occupant_ID')
//                 .exec((err, data) => {
//                     if (!data.length || err) {
//                         response.error = true
//                         response.success = false
//                         response.status = 404
//                         response.data = err
//                         response.message = "No payment found to retrieve!"
//                         return res.status(200).send(response)
//                     } else {
//                         let occupant_payments = []
//                         data.forEach(element => {
//                             if (element.occupant_ID._id == req.params.id) {
//                                 occupant_payments.push(element)
//                             }
//                         })
//                         response.error = false
//                         response.success = true
//                         response.status = 200
//                         response.data = occupant_payments
//                         response.message = "Payment Retrieved Successfully!"
//                         return res.status(200).send(response)
//                     }
//                 })
//         } else {
//             response.error = true
//             response.success = false
//             response.status = 503
//             response.message = "Service Unavailable!"
//             return res.status(200).send(response)
//         }