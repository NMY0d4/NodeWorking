const http = require("http");

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Nikola tesla",
    },
    {
        id: 1,
        name: "Sir Isaac Newton",
    },
    {
        id: 2,
        name: "Albert Einstein",
    },
];

const server = http.createServer((req, res) => {
    const items = req.url.split("/");
    if (items[1] === "friends") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        if (items.length === 3) {
            res.end(JSON.stringify(friends[+items[2]]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (items[1] === "messages") {
        res.setHeader("Content-Type", "text/html");
        res.write(
            "<html><body><ul><li>What are your thoughts on astronomy?</li><li>Hello Isaac</li></ul></body></html>"
        );
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
