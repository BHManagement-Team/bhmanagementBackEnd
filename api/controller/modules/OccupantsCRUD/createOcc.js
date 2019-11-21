const OccupantModel = require('../../../model/occupantDetails');

let response = {}

let createOcc = (req, res) => {
    if (req.body.token != null) {
        let room_name = req.body.room_name;
        let room_floor = req.body.room_floor;
        let occupant_name = req.body.occupant_name;
        let occupant_email = req.body.occupant_email;
        let occupant_contact = req.body.occupant_contact;
        let date_started = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        let Occupant = new OccupantModel.occupant({
            room_name,
            room_floor,
            occupant_name,
            occupant_email,
            occupant_contact,
            date_started
        })
        Occupant.save()
            .then(
                data => {
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Successfully saved an account"
                    res.send(response)
                })
            .catch(err => {
                if (err) {
                    response.error = true
                    response.success = false
                    response.status = 503
                    response.data = err
                    response.message = "Service Unavailable"
                    res.send(response)
                }
            });
    } else {
        response.auth = false
        response.status = 503
        response.error = true
        response.message = "Service Unavailable!"
        res.send(response);
    }
}

module.exports = { createOcc }
