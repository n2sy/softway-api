const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.login = (req, res, next) => {
    const login = req.body.login;
    const pwd = req.body.password;

    User.findOne({login : login}).then(u => {
        if(!u) {
            const error = new Error("User Not Found");
            error.statusCode = 404;
            throw error;
        }
        loadedUser = u;
        return bcrypt.compare(pwd, loadedUser.password);
    })
    .then(isEqual => {
        if(!isEqual) {
            const error = new Error("Wrong Password");
            error.statusCode = 404;
            throw error;
        }
        const token = jwt.sign({email : loadedUser.login, userId : loadedUser._id.toString()},
        'supersupersecretcode', {expiresIn: '12h'})

        res.status(200).json({
            message : 'User Logged !',
            token: token
        })
    })
    .catch(err => {
        console.log(err);
        next(err);
    })
    
}

exports.register = (req, res, next) => {

    const login = req.body.login;
    const pwd = req.body.password;

    bcrypt.hash(pwd, 12).then(
        hashedPwd => {
            const u = new User({
                login : login,
                password : hashedPwd
            })
            return u.save();
        })
        .then(result => {
            res.status(200).json({
                message : "New user created",
                userId : result['_id']
            })
        })
        .catch(err => {
            console.log(err);
            next(err);
        })

}