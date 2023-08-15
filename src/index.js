const express = require("express");
const app = express();

app.use("/img", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/index.html");
});

app.listen(7133, console.log("Server listening on port 7133!"));
