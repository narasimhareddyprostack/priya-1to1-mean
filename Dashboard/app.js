const express = require("express");
const app = express();

const port = process.env.PORT || 7000;

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const cors = require("cors");

const mongoURL = `mongodb://127.0.0.1:27017/`;
let db;
let col_name = "pdatabase";

//http://localhost:7000/users
app.use(cors());
app.get("/users", (req, res) => {
  db.collection(col_name)
    .find({})
    .toArray((err, result) => {
      res.send(result);
    });
});
MongoClient.connect(mongoURL, (err, client) => {
  if (err) console.log(err);
  db = client.db("pdatabase");
  app.listen(port, (err) => {
    console.log(`Server Running on Port: ... ${port}`);
  });
});
