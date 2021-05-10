const express = require("express");
const { Schema } = require("mongoose");
const { User, Email } = require("../../src/db/schemas");
const router = express.Router();

//Get inbox
router.get("/inbox", (req, res) => {
  //Load Username
  //Load Emails for User
});

//Send email
router.post("/send", async (req, res) => {
  console.log("hii");
  const mail = new Email({
    sender: req.body.sender,
    receiver: req.body.receiver,
    subject: req.body.subject,
    message: req.body.message,
  });
  //Check if reciever exists in DB
  let query = { username: req.body.receiver };
  await User.find(query, (err, results) => {
    if (results === []) {
      res.json({ foundUser: false });
    }
  });

  //Check for recipent in DB
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
    console.log(results);
    if (!results.length) {
      res.json({ userFound: null });
    } else {
      res.json({ userFound: true });
    }
  });
});

module.exports = router;
