const OccupantModel = require('../../../model/occupantDetails');

let response = { error: false, success: false }

let createOcc= (req, res) => {
    let room_name = req.body.room_name;
    let room_floor = req.body.room_floor;
    let occupant_name = req.body.occupant_name;
    let occupant_email = req.body.occupant_email;
    let occupant_contact = req.body.occupant_contact;

    let Occupant = new OccupantModel.occupantSchema({
        room_name,
        room_floor,
        occupant_name,
        occupant_email,
        occupant_contact
    })
    Occupant.save()
        .then(
            data => {
                response = { error: false, success: true, data: data }
            })
        .catch(err => {
            if (err) {
                response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
            }
        });
    res.send(response);
}

module.exports = { createOcc }
