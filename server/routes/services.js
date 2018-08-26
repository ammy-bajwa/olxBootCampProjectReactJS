var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.get('/drivers/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'drivers' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/education/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'education' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/electronics/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'electronics' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/event/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'event' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/health/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'health' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/maids/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'maids' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/movers/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'movers' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/other/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'other' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/travel/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'travel' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/developmnt/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'developmnt' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/home/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'home' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/catering/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'catering' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/farm/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'farm' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/car/ads', (req, res) => {
    adModel.find({ 'catogary': 'services', 'subCatogary': 'car' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
//export this router to use in our server.js
module.exports = router;