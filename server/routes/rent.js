var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.get('/apartments/ads', (req, res) => {
    adModel.find({ 'catogary': 'rent', 'subCatogary': 'apartments' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/houses/ads', (req, res) => {
    adModel.find({ 'catogary': 'rent', 'subCatogary': 'houses' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/lands/ads', (req, res) => {
    adModel.find({ 'catogary': 'rent', 'subCatogary': 'lands' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/portions/ads', (req, res) => {
    adModel.find({ 'catogary': 'rent', 'subCatogary': 'portions' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/roommates/ads', (req, res) => {
    adModel.find({ 'catogary': 'rent', 'subCatogary': 'roommates' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/vacation/ads', (req, res) => {
    adModel.find({ 'catogary': 'rent', 'subCatogary': 'vacation' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/shops/ads', (req, res) => {
    adModel.find({ 'catogary': 'rent', 'subCatogary': 'shops' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});

//export this router to use in our server.js
module.exports = router;