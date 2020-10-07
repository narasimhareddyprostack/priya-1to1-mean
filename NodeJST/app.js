import express from "express";
var app = express();
const port = 5000;

app.get("/", function (req, res) {
  res.send("<h1>Welcome to PSA</h1>");
});

app.listen(port, function (err) {
  if (err) throw err;
  console.log("Server Running on port: 5000....");
});
