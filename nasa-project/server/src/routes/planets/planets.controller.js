const { getALLPlanets } = require("../../models/planets.model");

function httpGetAllPlanets(req, res) {
    return res.status(200).json(getALLPlanets());
}

module.exports = { httpGetAllPlanets };
