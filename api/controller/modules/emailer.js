
// //IMPORTANT NOTE!!!
// //REMOVE API KEY BEFORE PUSHING TO


// const fs = require('fs');
// var template = fs.readFileSync('./template.html');
// template = template.toString();
// template = template.replace("_CLAIMCODE_", "Php 20,000.00")

// const OccupantModel = require('../../model/occupantDetails');
// let response = {error : true, success:true}

// let recepient = (req, res) => {
//   OccupantModel.Occupant.findOne("occupant_email",
//     (err, occ) => {
//       if (err || occ.length == 0) {
//         response.error = true
//         response.status = 404
//         response.success = false
//         response.data = err
//         response.message = "No email account found!"
//         res.send(response);
//       } else {
//         const sendMail = (to, content) => {
//           const sgMail = require('@sendgrid/mail');
//           sgMail.setApiKey("");
//           const msg = {
//             to: to,
//             from: 'BHM@protonmail.com',
//             subject: 'BHM Notification!!',
//             text: 'I love you!',
//             html: content
//           };
//           if (sgMail.send(msg)) {
//             console.log('sent');
//           } else {
//             console.log('error')
//           };
//         };
//         sendMail('chillajean.cabungcag@student.passerellesnumeriques.org', template);
//       }
//     })
// }

// module.exports = { recepient }
