const express = require("express");

const app = express();
const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Albert Einstein",
    },
    {
        id: 1,
        name: "Isaac Newton",
    },
];

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get("/friends", (req, res) => {
    res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
    const friendId = +req.params.friendId;
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: `Friend with id:${friendId} does not exist`,
        });
    }
});

app.get("/messages", (req, res) => {
    res.send("<ul><li>Hello Albert!</li><li>Hello Isaac!</li></ul>");
});

app.post("/messages", (req, res) => {
    console.log("updating messages...");
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
