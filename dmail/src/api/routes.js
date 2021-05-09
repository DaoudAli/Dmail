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
router.post("/send", (req, res) => {
  console.log(req.body);
  //Recieve Email Object
  //Check for recipent in DB
});

//Signup new user
router.post("/signup", (req, res) => {
  const user1 = new User({ username: "hi", password: "hi" });
  res.send("signup");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  await User.find(
    { username: username, password: password },
    async (err, results) => {
      console.log(results);
      if (!results.length) {
        res.json({ userFound: null });
      } else {
        res.json({ userFound: true });
      }
    }
  );
});

module.exports = router;
