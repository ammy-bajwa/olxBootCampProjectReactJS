var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.get('/cars/ads', (req, res) => {
    adModel.find({ 'catogary': 'vehicles', 'subCatogary': 'cars' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/buses/ads', (req, res) => {
    adModel.find({ 'catogary': 'vehicles', 'subCatogary': 'buses' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/rickshaw/ads', (req, res) => {
    adModel.find({ 'catogary': 'vehicles', 'subCatogary': 'rickshaw' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/assessories/ads', (req, res) => {
    adModel.find({ 'catogary': 'vehicles', 'subCatogary': 'assessories' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/parts/ads', (req, res) => {
    adModel.find({ 'catogary': 'vehicles', 'subCatogary': 'parts' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/boats/ads', (req, res) => {
    adModel.find({ 'catogary': 'vehicles', 'subCatogary': 'boats' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/tractors/ads', (req, res) => {
    adModel.find({ 'catogary': 'vehicles', 'subCatogary': 'tractors' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/other/ads', (req, res) => {
    adModel.find({ 'catogary': 'vehicles', 'subCatogary': 'other' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
//export this router to use in our server.js
module.exports = router;