var express = require('express');
let { adModel } = require('../db/adModel');
var router = express.Router();
var FCM = require('fcm-node');
var serverKey = 'AAAASjP1pJw:APA91bGhQAflwnexy8Qnt9nNhYPHnmBLto8P4kdeSDLpSq1iX2XTwptQ4c3toXY9okKdBk3zLx6S47eA5Wb9M8Jga9immHQUjyo2HZRMuL4aTE1ocUCxs4LdY7EfoNH3OwygXezr5M7bXa5pLLOzrKYw44rasjE66A'; //put your server key here
var fcm = new FCM(serverKey);



router.post('/send', (req, res) => {
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: 'dLB_-KDEzCY:APA91bGwLAHZWzgUqncn9LIYJEnf-3KWAkpJdU1yT3MsdskAflBO8wnhBJqTDr5ymCRsMO4tj7jEd0UEkbNWWuhgBc8QWMLMXEtPcuc9E-hLVWa0g0U3L5Humarwxpamn_dvRsVtJOZ3',
        collapse_key: 'BPt9Pyr4t7xXnjMVnyn2zKV65i2yE4NgGQqmEz5aSSwhqtsO9efzDH1CRfcZhxMhdMkIIcenjDh8Rbo9lkK_NpI',

        notification: {
            title: 'Title of your push notification',
            body: 'Body of your push notification'
        },

        data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            my_another_key: 'my another value'
        }
    };

    fcm.send(message, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
        res.json(response);
    });
});
router.post('/receive', (req, res) => {
    console.log(req.body);

});

//export this router to use in our server.js
module.exports = router;