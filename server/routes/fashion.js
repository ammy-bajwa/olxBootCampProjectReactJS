var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.get('/accessories/ads', (req, res) => {
    adModel.find({ 'catogary': 'fashion', 'subCatogary': 'accessories' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/clothes/ads', (req, res) => {
    adModel.find({ 'catogary': 'fashion', 'subCatogary': 'clothes' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/footwear/ads', (req, res) => {
    adModel.find({ 'catogary': 'fashion', 'subCatogary': 'footwear' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/jewellery/ads', (req, res) => {
    adModel.find({ 'catogary': 'fashion', 'subCatogary': 'jewellery' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/makeup/ads', (req, res) => {
    adModel.find({ 'catogary': 'fashion', 'subCatogary': 'makeup' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/skin/ads', (req, res) => {
    adModel.find({ 'catogary': 'fashion', 'subCatogary': 'skin' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/watches/ads', (req, res) => {
    adModel.find({ 'catogary': 'fashion', 'subCatogary': 'watches' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/wedding/ads', (req, res) => {
    adModel.find({ 'catogary': 'fashion', 'subCatogary': 'wedding' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/lawn/ads', (req, res) => {
    adModel.find({ 'catogary': 'fashion', 'subCatogary': 'lawn' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/couture/ads', (req, res) => {
    adModel.find({ 'catogary': 'fashion', 'subCatogary': 'couture' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/other/ads', (req, res) => {
    adModel.find({ 'catogary': 'fashion', 'subCatogary': 'other' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});




//export this router to use in our server.js
module.exports = router;