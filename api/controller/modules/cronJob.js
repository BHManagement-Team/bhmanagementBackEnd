var cron = require('node-cron');

//importing billing script
let billing_script = require('../modules/billing')

//every 1 min
let cronJob = () => {
    console.log("hello world");
    
    cron.schedule('*/5 * * * * *', function () {
        let timestamps = new Date();
        let occupant_date_started = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        billing_script.billing_cycle(occupant_date_started)
        console.log('running a task every five sec >>> ' + timestamps);
        
    });
}

module.exports = { cronJob }