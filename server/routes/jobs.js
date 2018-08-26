var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.get('/online/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'online' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/marketing/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'marketing' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/advertising/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'advertising' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/education/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'education' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/service/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'service' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/sales/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'sales' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/it/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'it' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/hotels/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'hotels' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/clerical/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'clerical' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/human/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'human' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/accounting/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'accounting' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/manufacturing/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'manufacturing' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/medical/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'medical' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/domestic/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'domestic' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/parttime/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'parttime' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/other/ads', (req, res) => {
    adModel.find({ 'catogary': 'jobs', 'subCatogary': 'other' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});


//export this router to use in our server.js
module.exports = router;