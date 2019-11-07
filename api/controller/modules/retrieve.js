
let retrieveOne = (model,req,res) => {
// model - from server to database
// req - from client to server
// res - from server to client
    res.send("hello")
}
let retrieveAll = (Account, res) => {
    Account.find({}, (err, account) => {
        if (err) {
            res.status(200).send({ error: { body: err, message: "no account", status: true }, success: false, data: null })
        } else {
            res.status(200).send({ error: false, success: true, data: account })
        }
    }).catch(err => {
        if (err) {
            res.status(200).send({ error: { body: err, message: "service unavailable", status: true }, success: false, data: null })
        }
    });
}

module.exports = { retrieveOne, retrieveAll }
