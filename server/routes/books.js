var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.get('/magazines/ads', (req, res) => {
    adModel.find({ 'catogary': 'books', 'subCatogary': 'magazines' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/music/ads', (req, res) => {
    adModel.find({ 'catogary': 'books', 'subCatogary': 'music' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/sports/ads', (req, res) => {
    adModel.find({ 'catogary': 'books', 'subCatogary': 'sports' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/gym/ads', (req, res) => {
    adModel.find({ 'catogary': 'books', 'subCatogary': 'gym' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/other/ads', (req, res) => {
    adModel.find({ 'catogary': 'books', 'subCatogary': 'other' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});



//export this router to use in our server.js
module.exports = router;