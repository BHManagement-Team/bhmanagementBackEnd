const AccountModel = require('../../model/account');
const jwt = require("jsonwebtoken");

let login = async (req, res) => {
    // {
    //     "username":"admin",
    //     "password":"admin"
    // }
    let username = req.body.username
    let password = req.body.password

    try {
        let account = await AccountModel.Account.findOne({ username: username }).exec();
        if (!account) {
            return res.status(200).send({
                error: true,
                success: false,
                status: 400,
                auth: false,
                message: "The username does not exist!"
            });
        }
        account.comparePassword(password, (error, match) => {
            if (!match) {
                return res.status(200).send({
                    error: true,
                    success: false,
                    status: 400,
                    auth: false,
                    message: "The password is invalid!"
                });
            }
            else {
                let token = jwt.sign({
                    username: username,
                    password: password
                }, "secret", {
                    expiresIn: 86400 // expires in 24 hours
                })

                return res.status(200).send({
                    error: false,
                    success: true,
                    status: 200,
                    data: account,
                    token: token,
                    auth: true,
                    message: "The username and password combination is correct!"
                });
            }
        })


    }
    catch (error) {
        console.error(error);
        return res.status(200).send(error);
    }
}

module.exports = { login }