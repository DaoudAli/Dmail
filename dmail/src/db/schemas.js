const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    mail: {
      inbox: Array,
      trash: Array,
      sent: Array,
      spam: Array,
    },
  },
  {
    collection: "users",
  }
);

const emailSchema = new Schema(
  {
    subject: String,
    message: String,
    time: String,
    sender: String,
    reciever: String,
  },
  {
    collection: "emails",
  }
);

module.exports = {
  User: mongoose.model("User", userSchema),
  Email: mongoose.model("Email", emailSchema),
};
