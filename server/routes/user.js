var express = require('express');
var router = express.Router();
let { userModel } = require('../db/userModel');
let { adModel } = require('../db/adModel');




router.post('/signin', (req, res) => {
    userModel.findOne({
        'email': req.body.email,
        'password': req.body.password
    }).then(user => {
        if (!user) {
            return res.json({ notFound: 'No User Found' });
        }
        user.token = req.body.token;
        user.save((err, user) => {
            if (err) res.json(err);
            res.json(user)
        })
    }).catch((err) => {
        res.json(err);
    });
});

router.post('/signup', (req, res) => {
    var newUser = new userModel({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact,
        city: req.body.city,
        token: req.body.token,
        createdAt: req.body.createdAt
    });
    newUser.save((err, savedUser) => {
        if (err) res.json(err)
        res.json(savedUser)
    })
});
router.post('/edit', (req, res) => {
    res.end('hello other');
});
router.post('/ads', (req, res) => {
    adModel.find({ 'user': req.body.email }, (err, ads) => {
        if (err) res.json(err);
        res.json(ads);
    })
});


//export this router to use in our server.js
module.exports = router;