require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// mongodb - connection file
const db = require("./database/database.config");
// router file
const userRouter = require("./routers/user.router");
// console.log(db);

const dbConnect = mongoose.connect(db.url);

app.use("/", userRouter);

// connect to db
dbConnect
  .then(() => {
    console.log("db connect");
  })
  .catch((error) => {
    console.log(error);
  });

console.log(dbConnect);

app.listen("4003", process.env.HOSTNAME, () => {
  console.log(`app is listening on port ${process.env.APPPORT}`);
});
