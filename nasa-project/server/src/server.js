const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = require("./app");

dotenv.config();

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL = process.env.MONGO_DB_URL;

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB Connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);

  await loadPlanetsData();
  server.listen(PORT, () => console.log(`Listening on ${PORT}...`));
}

startServer();
