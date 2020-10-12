import express from "express";
var app = express();
var path = require("path");
const port = 5000;

app.use(express.static(__dirname + "/public"));

app.set("views", "./src/view");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index", { message: "Movie Application"} );
});

app.listen(port, function (err) {
  if (err) throw err;
  console.log("Server Running on port: 5000....");
});
