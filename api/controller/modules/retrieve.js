let response = { error: null, success: null }

let retrieveOne = (model, req, res) => {
    // model - from server to database
    // req - from client to server
    // res - from server to client
    res.send("hello")
}
let retrieveAll = (Account, res) => {
    Account.find({}, (err, account) => {
        if (err) {
            response = { error: { body: err, message: "no account", status: true }, success: false, data: null }
        } else {
            response = { error: false, success: true, data: account }
        }
    }).catch(err => {
        if (err) {
            response = { error: { body: err, message: "service unavailable", status: true }, success: false, data: null }
        }
    });
    res.status(200).send(response);
}

module.exports = { retrieveOne, retrieveAll }
