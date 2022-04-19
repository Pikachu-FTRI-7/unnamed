const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    userNewUrlParser: true,
    userUnifiedTopology: true,
    dbName: "Pikachu",
  })
  .then(() => console.log("Connected to Mongo DB"))
  .catch((err) => console.log(err));

userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  montlyConst: { type: Number, required: true },
  montlyMileage: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);
