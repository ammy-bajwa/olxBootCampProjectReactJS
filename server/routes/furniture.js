var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.get('/sofa/ads', (req, res) => {
    adModel.find({ 'catogary': 'furniture', 'subCatogary': 'sofa' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/beds/ads', (req, res) => {
    adModel.find({ 'catogary': 'furniture', 'subCatogary': 'beds' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/decor/ads', (req, res) => {
    adModel.find({ 'catogary': 'furniture', 'subCatogary': 'decor' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/tables/ads', (req, res) => {
    adModel.find({ 'catogary': 'furniture', 'subCatogary': 'tables' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/garden/ads', (req, res) => {
    adModel.find({ 'catogary': 'furniture', 'subCatogary': 'garden' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/painting/ads', (req, res) => {
    adModel.find({ 'catogary': 'furniture', 'subCatogary': 'painting' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/rugs/ads', (req, res) => {
    adModel.find({ 'catogary': 'furniture', 'subCatogary': 'rugs' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/curtains/ads', (req, res) => {
    adModel.find({ 'catogary': 'furniture', 'subCatogary': 'curtains' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/office/ads', (req, res) => {
    adModel.find({ 'catogary': 'furniture', 'subCatogary': 'office' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/other/ads', (req, res) => {
    adModel.find({ 'catogary': 'furniture', 'subCatogary': 'other' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});
router.get('/other/ads', (req, res) => {
    adModel.find({ 'catogary': 'furniture', 'subCatogary': 'other' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })

});




//export this router to use in our server.js
module.exports = router;