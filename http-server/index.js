const http = require("http");

// copy/paste next line in the console of the webpage where server running for POSTing data
// fetch('http://localhost:3000/friends',{method:'POST', body:JSON.stringify({id:3, name:'Ryan Dahl'})});

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
    if (req.method === "POST" && items[1] === "friends") {
        req.on("data", (data) => {
            const friend = data.toString();
            console.log("Request:", friend);
            friends.push(JSON.parse(friend));
        });
    } else if (req.method === "GET" && items[1] === "friends") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        if (items.length === 3) {
            res.end(JSON.stringify(friends[+items[2]]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (req.method === "GET" && items[1] === "messages") {
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
