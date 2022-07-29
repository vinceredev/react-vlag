const express = require("express");
const path = require("path");

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(8080, () =>
  console.log("Server listening on http://localhost:8080, Ctrl+C to stop")
);
