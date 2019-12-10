const PaymentModel = require('../../model/paymentDetails');
const OccupantModel = require('../../model/occupantDetails');

//importing emailer
const my_emailer = require('./emailer')
const my_sms = require('./sms')
let response = {
    error: false,
    success: false
}


//try to get the date started of the occupant and compare the current date when the cronjob start
let billing_cycle = (cron_date) => {

    OccupantModel.Occupant.find({})
        .populate('room_ID')
        .exec(
            (err, data) => {
                if (err || !data.length) {
                    response.error = true
                    response.success = false
                    response.status = 404
                    response.data = err
                    response.message = "No payment found to retrieve!"
                    // return res.status(200).send(response)
                    console.log(response);
                    
                } else {
                    data.forEach(element => {
                        let amount = element.room_ID.room_price
                        if (element.date_started == cron_date) {
                            if (element.date_started.slice(8, 12) == cron_date.slice(8, 12)) {
                                // let amount = amount_to_pay(element.room_name)
                                console.log(element.occupant_contact, element.occupant_email, amount);
                                my_emailer.emailer(element.occupant_email, amount)
                                // my_sms.sms_sender(element.occupant_contact, 1500)
                            }
                        }
                    });
                    response.error = false
                    response.success = true
                    response.status = 200
                    response.data = data
                    response.message = "Successful Running of Billing Script!"
                    console.log(response);
                    

                }
            })



}
module.exports = {
    billing_cycle
}