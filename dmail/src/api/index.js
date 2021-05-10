const mongoURL = "mongodb://localhost:27017/dmail";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");

//Connect to DB then serve backend
mongoose
  .connect(mongoURL, options)
  .then(() => {
    console.log("Connected to Dmail DB");
    app.listen(5000, () => {
      console.log("express server Online @ port 5000");
    });
  })
  .catch((err) => {
    console.log("Could not connect to DB: " + err);
  });
mongoose.set("useFindAndModify", false);

app.use(cors()); //Needs to be updated before deployment for safety issues
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use("/", routes);
