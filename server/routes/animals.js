var express = require('express');
var router = express.Router();
let { adModel } = require('../db/adModel');



router.get('/fish/ads', (req, res) => {
    adModel.find({ 'catogary': 'animals', 'subCatogary': 'fish' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/birds/ads', (req, res) => {
    adModel.find({ 'catogary': 'animals', 'subCatogary': 'birds' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/hens/ads', (req, res) => {
    adModel.find({ 'catogary': 'animals', 'subCatogary': 'hens' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/dogs/ads', (req, res) => {
    adModel.find({ 'catogary': 'animals', 'subCatogary': 'dogs' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/livestock/ads', (req, res) => {
    adModel.find({ 'catogary': 'animals', 'subCatogary': 'livestock' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/horses/ads', (req, res) => {
    adModel.find({ 'catogary': 'animals', 'subCatogary': 'horses' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/food/ads', (req, res) => {
    adModel.find({ 'catogary': 'animals', 'subCatogary': 'food' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/other/ads', (req, res) => {
    adModel.find({ 'catogary': 'animals', 'subCatogary': 'other' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});


//export this router to use in our server.js
module.exports = router;