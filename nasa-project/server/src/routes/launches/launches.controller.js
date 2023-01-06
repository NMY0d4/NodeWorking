const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
    return res.status(200).json(Array.from(getAllLaunches()));
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    if (
        !launch.mission ||
        !launch.rocket ||
        !launch.launchDate ||
        !launch.target
    ) {
        return res.status(400).json({
            error: "Missing required launch property",
        });
    }
    launch.launchDate = new Date(launch.launchDate);
    if (!isFinite(launch.launchDate)) {
        return res.status(400).json({ error: "Invalid launch date" });
    }

    addNewLaunch(launch);
    res.status(201).json(launch);
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch };
