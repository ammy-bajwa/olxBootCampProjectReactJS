var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();


router.post('/all', (req, res) => {
    console.log(req.body);
    adModel.find({ $text: { $search: req.body.searchKeywork } }).then(ads => {
        console.log(ads);
        if (ads.length === 0) {
            return res.json({ message: 'Nothing Found' });
        }
        res.json(ads)
    }).catch((err) => {
        res.json(err);
    });
});
router.post('/catogary', (req, res) => {
    adModel.find(
        {
            $text: { $search: req.body.searchKeywork },
            'catogary': req.body.catogary
        }).then(ads => {
            console.log(ads);
            if (ads.length === 0) {
                return res.json({ message: 'Nothing Found' });
            }
            res.json(ads)
        }).catch((err) => {
            res.json(err);
        });
});

//export this router to use in our server.js
module.exports = router;