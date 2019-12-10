//IMPORTANT NOTE!!!
//REMOVE API KEY BEFORE PUSHING TO GITHUB
const fs = require("fs");
var template = fs.readFileSync("./template.html");
template = template.toString();

let emailer = (receiver_email, amount_to_pay) => {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(
        ""
    );
    const msg = {
        to: "chillajean.cabungcag@student.passerellesnumeriuqes.org",
        from: "BHM@protonmail.com",
        cc: "chillajean.cabungcag@student.passerellesnumeriques.org",
        // bcc:   'christian.gigante@student.passerellesnumeriques.org',
        subject: "Boarding House Billing Notification",
        text: "It is all ready your billing date. The management is waiting for the amount of " +
            amount_to_pay,
        html: template
    };
    if (sgMail.send(msg)) {
        console.log("Billing Notification Sent");
    } else {
        console.log("Billing Notification Error");
    }
    sgMail.send(msg);
};

module.exports = {
    emailer
};