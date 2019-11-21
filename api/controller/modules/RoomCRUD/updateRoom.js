const RoomModel = require('../../../model/roomDetails');
let response = { error: false, success: false }

let updateRoom = (req, res) => {

    

    RoomModel.roomSchema.findOneAndUpdate({ _id: req.body.id },
        req.body, 
        {new : true},
        (err, account) => {
            if (err) {
                response.error = true
                response.status = 500
                response.success = false
                response.data = err
                response.message = "No room found to update!"
            } else {
                response = { error: false, success: true, data: account , message: "Updated Successfully!"}
            }
        }).catch(err => {
            if (err) {
                response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
            }
        });
    res.send(response);
}

let updateRoomById = (req, res) => {
    RoomModel.roomSchema.findOneAndUpdate({ _id: req.params.id },
        req.body, 
        {new : true},
        (err, account) => {
            if (err) {
                response.error = true
                response.status = 500
                response.success = false
                response.data = err
                response.message = "No room found to update!"
            } else {
                response = { error: false, success: true, data: account , message: "Updated Successfully!"}
            }
        }).catch(err => {
            if (err) {
                response = { error: { body: err, message: "Service unavailable", status: true }, success: false }
            }
        });
    res.send(response);
}

module.exports = { updateRoom, updateRoomById }