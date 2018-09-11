var express = require("express");
let { messageModel } = require("../db/messageModel");
var router = express.Router();
let { userModel } = require("../db/userModel");
var FCM = require("fcm-node");
var serverKey =
  "AAAASjP1pJw:APA91bGhQAflwnexy8Qnt9nNhYPHnmBLto8P4kdeSDLpSq1iX2XTwptQ4c3toXY9okKdBk3zLx6S47eA5Wb9M8Jga9immHQUjyo2HZRMuL4aTE1ocUCxs4LdY7EfoNH3OwygXezr5M7bXa5pLLOzrKYw44rasjE66A"; //put your server key here

let adUser;
router.post("/send", (req, res) => {
  userModel.findOne({ email: req.body.adAuthor }, (err, user) => {
    if (err) res.json(err);
    var fcm = new FCM(serverKey);
    var message = {
      //this may vary according to the message type (single recipient, multicast, topic, et cetera)
      to: `${user.token}`,
      collapse_key: "your_collapse_key",

      notification: {
        title: `Hi ${user.name}`,
        body: "You Have A New Message From Your OLX Account"
      },

      data: {
        //you can send only notification or only data(or include both)
        my_key: "my value",
        my_another_key: "my another value"
      }
    };

    fcm.send(message, function(err, response) {
      if (err) {
        console.log(err);
        console.log("Something has gone wrong!");
      } else {
        console.log("Successfully sent with response: ", response);
      }
    });
  });
  var newMessage = new messageModel({
    senderName: req.body.senderName,
    senderEmail: req.body.senderEmail,
    senderMessage: req.body.senderMessage,
    adAuthor: req.body.adAuthor,
    ad: req.body.adId,
    createdAt: req.body.createdAt,
    replyStatus: false
  });
  newMessage.save((err, savedMessage) => {
    if (err) res.json(err);
    res.json(savedMessage);
  });
});
router.post("/receive", (req, res) => {
  messageModel
    .find({ adAuthor: req.body.userEmail })
    .populate("ad")
    .exec((err, result) => {
      if (err) res.json(err);
      res.json(result);
    });
});
router.post("/reply", (req, res) => {
  console.log(req.body);
  let newReply = new messageModel({
    senderName: req.body.senderName,
    senderEmail: req.body.senderEmail,
    senderMessage: req.body.senderMessage,
    adAuthor: req.body.messageReceiver,
    ad: req.body.adId,
    createdAt: req.body.createdAt,
    replyStatus: "false"
  });
  newReply.save((err, savedMessage) => {
    console.log("area va haha");
    if (err) res.json(err);
  });
  userModel.findOne({ email: req.body.messageReceiver }, (err, user) => {
    if (err) res.json(err);
    var fcm = new FCM(serverKey);
    var message = {
      //this may vary according to the message type (single recipient, multicast, topic, et cetera)
      to: `${user.token}`,
      collapse_key: "your_collapse_key",
      notification: {
        title: `Hi ${user.name}`,
        body: "You Have A New Message"
      },
      data: {
        //you can send only notification or only data(or include both)
        my_key: "my value",
        my_another_key: "my another value"
      }
    };

    fcm.send(message, function(err, response) {
      if (err) {
        console.log("Something has gone wrong!");
      } else {
        console.log("Successfully sent with response");
      }
    });
  });

  messageModel
    .findOne({ _id: req.body.messageId })
    .then(message => {
      message.replyStatus = "true";
      return message.save(err => {
        if (err) res.json(err);
      });
    })
    .then(message => res.json(message))
    .catch(err => {
      res.json(err);
    });
});
router.post("/settokken", (req, res) => {
  userModel
    .findOne({
      email: req.body.email
    })
    .then(user => {
      if (!user) {
        return res.json({ notFound: "No User Found" });
      }
      user.token = req.body.token;
      user.save((err, user) => {
        if (err) res.json(err);
        res.json(user);
      });
    })
    .catch(err => {
      res.json(err);
    });
});
router.post("/delete", (req, res) => {
  console.log(req.body)
  messageModel
    .findOneAndRemove({
      _id : req.body.id
    })
    .then(message => {
      res.json(message);
     })
    .catch(err => {
      res.json(err);
    });
});

//export this router to use in our server.js
module.exports = router;
