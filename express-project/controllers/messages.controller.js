const path = require("path");

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));
    // res.send("<ul><li>Hello Albert!</li><li>Hello Isaac!</li></ul>");
}

function postMessage(req, res) {
    console.log("updating messages...");
}

module.exports = {
    getMessages,
    postMessage,
};
