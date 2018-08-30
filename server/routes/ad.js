var express = require('express');
var router = express.Router();
let { adModel } = require('../db/adModel');
let { userModel } = require('../db/userModel');


router.post('/add', (req, res) => {
    var newAd = new adModel({
        adTitle: req.body.adTitle,
        itemCondition: req.body.itemCondition,
        itemPic: req.body.itemPic,
        price: req.body.price,
        city: req.body.city,
        itemDetails: req.body.itemDetails,
        catogary: req.body.catogary,
        subCatogary: req.body.subCatogary,
        user: req.body.user,
        createdAt: req.body.createdAt,
        status: 'Active'
    });
    newAd.save((err, savedAd) => {
        if (err) res.json(err);
        res.json(savedAd);
    })
});
router.post('/remove', (req, res) => {
    adModel.findByIdAndRemove({_id:req.body.id},(err,ad)=>{
        if (err) res.json(err);
        res.json(ad);
    })
});
router.post('/adauthor', (req, res) => {
    userModel.findOne({
        'email': req.body.email
    }, (err, author) => {
        if (err) res.json(err);
        res.json(author);
    })
});

//export this router to use in our server.js
module.exports = router;