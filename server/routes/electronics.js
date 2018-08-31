var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.get('/camera/ads', (req, res) => {
    adModel.find(
      { catogary: "electronics", subCatogary: "camera" },
      (err, result) => {
        if (err) res.json(err);
        res.json(result);
      }
    );

});
router.get('/computer/ads', (req, res) => {
    adModel.find({ 'catogary': 'electronics', 'subCatogary': 'computer' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/games/ads', (req, res) => {
    adModel.find({ 'catogary': 'electronics', 'subCatogary': 'games' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/generators/ads', (req, res) => {
    adModel.find({ 'catogary': 'electronics', 'subCatogary': 'generators' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/kitchen/ads', (req, res) => {
    adModel.find({ 'catogary': 'electronics', 'subCatogary': 'kitchen' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/tv/ads', (req, res) => {
    adModel.find({ 'catogary': 'electronics', 'subCatogary': 'tv' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/ac/ads', (req, res) => {
    adModel.find({ 'catogary': 'electronics', 'subCatogary': 'ac' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/fridge/ads', (req, res) => {
    adModel.find({ 'catogary': 'electronics', 'subCatogary': 'fridge' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/washing/ads', (req, res) => {
    adModel.find({ 'catogary': 'electronics', 'subCatogary': 'washing' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});
router.get('/appliances/ads', (req, res) => {
    adModel.find({ 'catogary': 'electronics', 'subCatogary': 'appliances' }, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});




//export this router to use in our server.js
module.exports = router;