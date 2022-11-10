var express = require('express');
var router = express.Router();
const User = require('../Models/User')
// var jwt = require('jsonwebtoken');
// var expressJwt = require('express-jwt');

router.post('/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result)
})

router.post('/login', async (req, res) => {
    let user = await User.findOne(req.body).select("-password");
    if (req.body.email && req.body.password) {
        if (user) {
            res.send(user);
        }
        else {
            res.send({ Result: "No user Found" })
        }
    }
    else {
        res.send({ Result: "No user Found" })
    }
})

router.get("/signout", (req, res) => {
    res.clearCookie("token");
    res.json({
        message: "User Signed Out Succesfully"
    });
});


module.exports = router;