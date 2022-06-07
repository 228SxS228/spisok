const http = require("http");
const host = 'localhost';
const port = 5050;
const fs = require('fs').promises;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/data.json")
        .then(data => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(data);
        })

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});