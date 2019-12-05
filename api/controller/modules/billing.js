const OccupantModel = require('../../model/occupantDetails');

//importing emailer
const my_emailer = require('./emailer')
const my_sms = require('./sms')
let response = { error: false, success: false }

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
                return res.status(200).send(response)
            } else {
                data.forEach(element => {
                    if (element.date_started != cron_date) {
                        if (element.date_started.slice(8, 12) == cron_date.slice(8, 12)) {
                            
                            console.log(element.occupant_contact, element.occupant_email);
                            my_emailer.emailer(element.occupant_email)
                            // my_sms.sms_sender(element.occupant_contact)
                        }
                    }
                });
            }
        })


    } catch (err) {
        response.error = true
        response.success = false
        response.data = err
        response.status = 503
        response.message = "Service Unavailable!"
        return res.status(200).send(response)
    }
}
module.exports = { billing_cycle }