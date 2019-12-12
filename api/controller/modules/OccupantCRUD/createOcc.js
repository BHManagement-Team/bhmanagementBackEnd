const OccupantModel = require('../../../model/occupantDetails');

let response = {}

let createOcc = (req, res) => {
    ////data from frontend
    // {
    //     "token": "xxx",
    //     "room_ID": "5de7cfe44f34c40f185ed08a",
    //      "room_foor": "1",
    //      "room_name": "1afloor",
    //     "occupant_name": "Mayyy",
    //     "occupant_email": "chan@gmail.com",
    //     "occupant_contact": "09505764777"
    // }
    if (req.body.token != null) {
        let room_ID = req.body.room_ID;
        let room_floor = req.body.room_floor;
        let room_name = req.body.room_name;
        let occupant_name = req.body.occupant_name;
        let occupant_gender = req.body.occupant_gender;
        let occupant_email = req.body.occupant_email;
        let occupant_contact = req.body.occupant_contact;
        let date_started = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

        let Occupant = new OccupantModel.Occupant({
            room_ID: room_ID,
            room_floor: room_floor,
            room_name: room_name,
            occupant_name: occupant_name,
            occupant_gender: occupant_gender,
            occupant_email: occupant_email,
            occupant_contact: occupant_contact,
            date_started: date_started,
            date_removed: null
        })
        Occupant.save()
            .then(
                data => {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Successfully saved an account!"
                    return res.status(200).send(response)
                })
            .catch(err => {
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
        response.auth = false
        response.status = 503
        response.error = true
        response.message = "Service Unavailable!"
        return res.status(200).send(response);
    }
}

module.exports = {
    createOcc
}