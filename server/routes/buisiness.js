var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.get('/agriculture/ads', (req, res) => {
    adModel.find({ 'catogary': 'buisiness', 'subCatogary': 'agriculture' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/construction/ads', (req, res) => {
    adModel.find({ 'catogary': 'buisiness', 'subCatogary': 'construction' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/medical/ads', (req, res) => {
    adModel.find({ 'catogary': 'buisiness', 'subCatogary': 'medical' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/food/ads', (req, res) => {
    adModel.find({ 'catogary': 'buisiness', 'subCatogary': 'food' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/trade/ads', (req, res) => {
    adModel.find({ 'catogary': 'buisiness', 'subCatogary': 'trade' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/sale/ads', (req, res) => {
    adModel.find({ 'catogary': 'buisiness', 'subCatogary': 'sale' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/industry/ads', (req, res) => {
    adModel.find({ 'catogary': 'buisiness', 'subCatogary': 'industry' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});



//export this router to use in our server.js
module.exports = router;