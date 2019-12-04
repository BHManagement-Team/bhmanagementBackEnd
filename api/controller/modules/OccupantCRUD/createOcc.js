const OccupantModel = require('../../../model/occupantDetails');

let response = {}

let createOcc = (req, res) => {
    console.log(req.body);

    if (req.body.token != null) {
        // let room_name = req.body.room_name;
        // let room_floor = req.body.room_floor;
        let room_ID = req.params.room_ID
        let occupant_name = req.body.occupant_name;
        let occupant_email = req.body.occupant_email;
        let occupant_contact = req.body.occupant_contact;
        let date_started = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

        let Occupant = new OccupantModel.Occupant({
            room_ID,
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