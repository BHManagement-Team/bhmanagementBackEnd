//findByIdAndUpdate 
const models = require('../../model/account');
let response = { error: false, success: false, data: null };

let updateOne = (req, res) => {
    models.Account.findByIdAndUpdate(
        { _id: req.body._id }, //find match item in DB
        req.body,//the update to be made
        { upsert: true },
        { new: true }, //to return the latest update not the pre update one
        (err, data) => { //callback function
            if (err) { // Handle any possible database errors
                // return res.status(500).send(err);
                response.status = 500
                response.data = err
                response.message = "Database Update Error!"
                res.send(response)
            } else {
                response.status = 200
                response.success = true
                response.data = data
                response.message = "Updated Successfully!"
                res.send(response)
            }
            // res.send(response);
        })
}

module.exports = { updateOne }