const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/testURL") {
        // res.writeHead(200, {
        //     "Content-type": "application/json",
        // });
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(
            JSON.stringify({
                id: 1,
                name: "Sir Isaac Newton",
            })
        );
    } else if (req.url === "/test2") {
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
