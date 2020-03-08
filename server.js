const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/test", (req, res) => {
  res.send({
    express: "Hello I'm Netify"
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
