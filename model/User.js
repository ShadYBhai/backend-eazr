const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    name: String,
    email: String,
    dateOfBirth: Date,
});

const User = mongoose.model("users", user);

module.exports = User;