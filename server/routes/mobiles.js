var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.get('/phones/ads', (req, res) => {
    adModel.find({ 'catogary': 'mobiles', 'subCatogary': 'phones' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/tablets/ads', (req, res) => {
    adModel.find({ 'catogary': 'mobiles', 'subCatogary': 'tablets' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/accessories/ads', (req, res) => {
    adModel.find(
      { catogary: "mobiles", subCatogary: "accessories" },
      (err, result) => {
        if (err) res.json(err);
        res.json(result);
      }
    );
});

//export this router to use in our server.js
module.exports = router;