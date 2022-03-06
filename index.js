const express = require("express");
const app = express();

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("test");
});

app.get("/aaa", (req, res) => {
  res.send("Hello World aaa");
  console.log("aa");
});

app.get("/aaa/:id", (req, res) => {
  res.send("Hello World aaa" + req.params.id);
  console.log("aa", req.params.id);
});

app.listen(3000, () => console.log("3000"));
