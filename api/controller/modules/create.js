// let models = require('../../model/account');
// var response = { error: null, success: null }


// module.exports = (req, res) => {
//     // model - from server to database
//     // req - from client to server
//     // res - from server to client
//     let username = req.body.username;
//     let password = req.body.password;
//     let account = new models({
//         username,
//         password
//     });
//     account.save()
//         .then(result => {
//             response.success = { error: false, data: result };
//         })
//         .catch(err => {
//             response.error = { error: { body: err, status: true }, success: false };
//         })
//     res.status(200).send(response)
// }
