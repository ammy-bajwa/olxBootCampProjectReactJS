var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.get('/furniture/ads', (req, res) => {
    adModel.find({ 'catogary': 'kids', 'subCatogary': 'furniture' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/toys/ads', (req, res) => {
    adModel.find({ 'catogary': 'kids', 'subCatogary': 'toys' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/prams/ads', (req, res) => {
    adModel.find({ 'catogary': 'kids', 'subCatogary': 'prams' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/swings/ads', (req, res) => {
    adModel.find({ 'catogary': 'kids', 'subCatogary': 'swings' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/bikes/ads', (req, res) => {
    adModel.find({ 'catogary': 'kids', 'subCatogary': 'bikes' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/accessories/ads', (req, res) => {
    adModel.find({ 'catogary': 'kids', 'subCatogary': 'accessories' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});


//export this router to use in our server.js
module.exports = router;