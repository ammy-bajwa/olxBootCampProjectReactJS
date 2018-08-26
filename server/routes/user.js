var express = require('express');
var router = express.Router();
let { userModel } = require('../db/userModel');
let { adModel } = require('../db/adModel');




router.post('/signin', (req, res) => {
    console.log(req.body);
    userModel.findOne({
        'email': req.body.email,
        'password': req.body.password
    }).then(user => {
        console.log(user);
        if (!user) {
            return res.json({ notFound: 'No User Found' });
        }
        res.json(user)
    }).catch((err)=>{
        res.json(err);
    });
});

router.post('/signup', (req, res) => {
    console.log(req.body)
    var newUser = new userModel({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact,
        city: req.body.city,
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
    console.log(req.body)
    adModel.find({'user':req.body.email},(err,ads)=>{
        if(err) res.json(err);
        res.json(ads);
    })
});


//export this router to use in our server.js
module.exports = router;