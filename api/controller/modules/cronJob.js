var cron = require('node-cron');

//every 1 min
let timestamps = Date().slice(0,25);
cron.schedule('*/1 * * * *', function () {
    console.log('running a task every minute >>> ' + timestamps);
});

