const express = require("express");
const { Schema } = require("mongoose");
const { User, Email } = require("../../src/db/schemas");
const router = express.Router();

//Get inbox
router.post("/loadInbox", async (req, res) => {
  const user = req.body.user;

  await Email.find({ receiver: user }, (err, emails) => {
    let inboxMails = [];
    let trashMails = [];
    let starredMails = [];
    for (const email of emails) {
      if (email.type === "inbox") {
        inboxMails.push(email);
      }
      if (email.type === "trash") {
        trashMails.push(email);
      }
      if (email.type === "starred") {
        starredMails.push(email);
      }
    }
    res.send({ inboxMails, trashMails, starredMails });
  });
});

//Send email
router.post("/send", async (req, res) => {
  console.log("sending...");
  const newMail = new Email({
    sender: req.body.sender,
    receiver: req.body.receiver,
    subject: req.body.subject,
    message: req.body.message,
    time: req.body.time,
    type: "inbox",
  });

  newMail.save();

  //Check if reciever exists in DB
  let query = { username: req.body.receiver };
  await User.findOne(query, (err, user) => {
    if (user === []) {
      res.json({ foundUser: false });
    } else {
      user.mail.inbox.push(newMail._id);
      user.save();
    }
  });
});

//Signup new user
router.post("/signup", (req, res) => {
  const user1 = new User({ username: "hi", password: "hi" });
  res.send("signup");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let query = { username: username, password: password };

  await User.find(query, async (err, results) => {
    if (!results.length) {
      res.json({ userFound: null });
    } else {
      res.json({ userFound: true });
    }
  });
});

module.exports = router;
