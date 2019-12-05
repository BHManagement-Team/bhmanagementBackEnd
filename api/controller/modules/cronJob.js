var cron = require('node-cron');

//importing billing 
let billing = require('./billing')

//every 1 min
let cronJob = () => {
    cron.schedule('*/10 * * * * *', function () {
        let timestamps = new Date();
        let cron_date =  new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        billing.billing_cycle(cron_date)
        console.log('CRON_JOB running a task every five sec >>> ' + timestamps);
        
    });
}

module.exports = { cronJob }