const mongoose = require("mongoose");

const connectDB = async (req, res) => {
    try {
        mongoose.connect(
            "mongodb+srv://eazr:MiIOeFbk9NAJMTX0@eazr.0j1knuc.mongodb.net/"
        );
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
