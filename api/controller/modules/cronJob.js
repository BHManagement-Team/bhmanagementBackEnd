var cron = require('node-cron');

//importing billing 
let billing = require('./billing')

//every 1 min
let cronJob = () => {
    console.log("hello world");
    cron.schedule('*/5 * * * * *', function () {
        let timestamps = new Date();
        let cron_date =  new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        billing.billing_cycle(cron_date)
        console.log('running a task every five sec >>> ' + timestamps);
        
    });
}

module.exports = { cronJob }