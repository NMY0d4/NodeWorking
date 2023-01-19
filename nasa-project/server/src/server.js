const http = require("http");
const dotenv = require("dotenv");
const { mongoConnect } = require("./services/mongo");

const app = require("./app");

dotenv.config();

const { loadPlanetsData } = require("./models/planets.model");
const { loadLauchesData } = require("./models/launches.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadPlanetsData();
    await loadLauchesData();
    server.listen(PORT, () => console.log(`Listening on ${PORT}...`));
}

startServer();
