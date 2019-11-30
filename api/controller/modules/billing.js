const PaymentModel = require('../../model/paymentDetails');
const AccountModel = require('../../model/occupantDetails');

//importing emailer
const my_emailer = require('./emailer')
let response = { error: false, success: false }

//get room amount by room name
const RoomModel = require('../../model/roomDetails')
let amount_to_pay = (room_name) => {
    try {
        RoomModel.Room.findOne({ _id: room_name }, (err, room) => {
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

//try to get the date started of the occupant and compare the current date when the cronjob start

let billing_cycle = (date_time) => {
    try {
        // PaymentModel.Payment.find({})
        //     .populate('occupant_ID')
        //     .exec((err, data) => {
        //         if (err || !data.length) {
        //             response.error = true
        //             response.success = false
        //             response.status = 404
        //             response.data = err
        //             response.message = "No payment found to retrieve!"
        //             return res.status(response.status).send(response)
        //         } else {

        //             data.forEach(element => {
        //                 let current_day = new Date().getDate();
        //                 let billing_day = Number(element.occupant_ID.date_started.slice(8, 10));
        //                 let current_month = new Date().getMonth();
        //                 let temp_billing_month = element.occupant_ID.date_started.split('/');
        //                 let billing_month = Number(temp_billing_month[1]) ;

        //                 if (current_month != billing_month) {
        //                     if (current_day == billing_day) {
        //                         let receiver = element.occupant_email
        //                         let amount_to_pay = amount_to_pay(element.room_name);
        //                         my_emailer.emailer(receiver, amount_to_pay)
        //                     }
        //                 }


        //             });
        //             // response.error = false
        //             // response.success = true
        //             // response.status = 200
        //             response.data = data
        //             // response.message = "Payment Retrieved Successfully!"
        //             return res.status(response.status).send(response)
        //         }
        //     })


    } catch (err) {
        response.error = true
        response.success = false
        response.data = err
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(response.status).send(response)
    }
}
module.exports = { billing_cycle }