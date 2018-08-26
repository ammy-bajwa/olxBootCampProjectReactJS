var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.get('/motorcycle/ads', (req, res) => {
    adModel.find({ 'catogary': 'bikes', 'subCatogary': 'motorcycle' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/parts/ads', (req, res) => {
    adModel.find({ 'catogary': 'bikes', 'subCatogary': 'parts' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/Bicycles/ads', (req, res) => {
    adModel.find({ 'catogary': 'bikes', 'subCatogary': 'Bicycles' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/Scooters/ads', (req, res) => {
    adModel.find({ 'catogary': 'bikes', 'subCatogary': 'Scooters' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/atv/ads', (req, res) => {
    adModel.find({ 'catogary': 'bikes', 'subCatogary': 'atv' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});



//export this router to use in our server.js
module.exports = router;