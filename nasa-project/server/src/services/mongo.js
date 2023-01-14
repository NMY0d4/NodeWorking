const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// Mongo DB connection have to be configured in a separate .env file
const MONGO_URL = process.env.MONGO_DB_URL;

mongoose.connection.once("open", () => {
    console.log("MongoDB Connection ready!");
});

mongoose.connection.on("error", (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

module.exports = { mongoConnect };
