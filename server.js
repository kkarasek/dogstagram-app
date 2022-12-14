const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist/dogstagram"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/dogstagram/index.html");
});

app.listen(process.env.PORT || 8080);
