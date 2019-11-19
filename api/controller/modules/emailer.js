const fs = require('fs');
var template = fs.readFileSync('./template.html');
template = template.toString();
template = template.replace("_CLAIMCODE", 123123)

const sendMail = (to, content) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(apiKey);
    const msg = {
        to: to,
        from: 'BHM@protonmail.com',
        subject: 'BHM Notification!',
        text: 'I love you!',
        html: content
    };
    if (sgMail.send(msg)) {
        console.log('sent');
    } else {
        console.log('error')
    };
};
// sendMail('leonilojr.torres@student.passerellesnumeriques.org', template);
// sendMail('renan.bargaso@student.passerellesnumeriques.org', template);
sendMail('chillajean.cabungcag@student.passerellesnumeriques.org', template);
// sendMail('lalaine.garrido@student.passerellesnumeriques.org', template);