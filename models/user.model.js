const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const userDetails = new Schema({
  userId: ObjectId,
  name: String,
  age: String,
  place: String,
});

mongoose.model("users", userDetails);
