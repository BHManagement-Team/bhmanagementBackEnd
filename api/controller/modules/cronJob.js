var cron = require('node-cron');

//every 1 min
let cronJob = () => {
    console.log("hello world");
    
    cron.schedule('*/5 * * * * *', function () {
        let timestamps = new Date();
        console.log('running a task every five sec >>> ' + timestamps);
        
    });
}

module.exports = { cronJob }