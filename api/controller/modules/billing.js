const PaymentModel = require('../../model/paymentDetails');
const OccupantModel = require('../../model/occupantDetails');

//importing emailer
const my_emailer = require('./emailer')
let response = { error: false, success: false }

//get room amount by room name
const RoomModel = require('../../model/roomDetails')

var amount_to_pay = (room_name) => {
    try {
        RoomModel.Room.findOne({ room_name: room_name }, (err, room) => {
            if (err || room == null) {
                return err
            } else {
                return room.room_price
            }
        })
    }
    catch (err) {
        return err
    }

}

// let amount_to_pay = async function (room_name) {
//     return await RoomModel.Room.findOne({ room_name: room_name });
// }

//try to get the date started of the occupant and compare the current date when the cronjob start
let billing_cycle = (cron_date) => {
    try {
        OccupantModel.Occupant.find({}, (err, data) => {
            if (err || !data.length) {
                response.error = true
                response.success = false
                response.status = 404
                response.data = err
                response.message = "No payment found to retrieve!"
                return res.send(response)
            } else {
                data.forEach(element => {
                    if (element.date_started == cron_date) {
                        if (element.date_started.slice(8, 12) == cron_date.slice(8, 12)) {
                            // let amount = amount_to_pay(element.room_name)
                            console.log(element.occupant_email);
                            my_emailer.emailer(element.occupant_email, 150)
                        }
                    }
                });
                // // response.error = false
                // // response.success = true
                // // response.status = 200
                // response.data = data
                // // response.message = "Payment Retrieved Successfully!"
                // return res.send(response)
            }
        })


    } catch (err) {
        // response.error = true
        // response.success = false
        // response.data = err
        // response.status = 503
        // response.message = "Service Unavailable!"
        // return res.send(response)
        console.log(err);        
    }
}
module.exports = { billing_cycle }