const PaymentModel = require('../../model/paymentDetails');
const OccupantModel = require('../../model/occupantDetails');

//importing emailer
const my_emailer = require('./emailer')
let response = { error: false, success: false }

//get room amount by room name
const RoomModel = require('../../model/roomDetails')
// let amount_to_pay = async (room_name) => {
let amount_to_pay = async function (room_name) {
    return await RoomModel.Room.findOne({ room_name: room_name });
}
// }


//try to get the date started of the occupant and compare the current date when the cronjob start

let billing_cycle = (cron_date) => {
    try {
        OccupantModel.Occupant.find({}, (err, data) => {
            let temp = []
            if (err || !data.length) {
                // response.error = true
                // response.success = false
                // response.status = 200
                // response.data = err
                // response.message = "No payment found to retrieve!"
                // return res.status(response.status).send(response)
                console.log(err);

            } else {
                data.forEach(element => {

                    //releasing bill
                    if (element.date_started == cron_date) {
                        if (element.date_started.slice(8, 12) == cron_date.slice(8, 12)) {
                            // let amount = amount_to_pay(element.room_name)
                            my_emailer.emailer(element.occupant_email)
                        }
                    }

                    // RoomModel.Room.find({room_name:element.room_name})
                    //     .then(data => {
                    //         temp.push(data)
                    //         console.log(temp);

                    //     })


                    // let amount = amount_to_pay(element.room_name)
                        // temp.push(element.room_name)
                           console.log(temp);
                })
                // response.error = false
                // response.success = true
                // response.status = 200
                // response.data = temp
                // response.message = "Successfully retrieve all payments!"
                // return res.status(response.status).send(response)

            }
        })

    } catch (err) {
        // response.error = true
        // response.success = false
        // response.data = err
        // response.status = 200
        // response.message = "Service Unavailable!"
        // return res.status(response.status).send(response)
        console.log(err);

    }
}
module.exports = { billing_cycle }