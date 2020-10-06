const epxress = require("express");
var app = epxress();
const port = 5000;
//localhost:5000
//tcs.com
app.get("/", function (req, res) {
  res.send("<h1>Welcome to PSA</h1>");
});
app.get("/aboutus", function (req, res) {
  res.send("<h1>Welcome to PSA - About us page .....</h1>");
});

app.listen(port, function (err) {
  if (err) throw err;
  console.log("Server Running on port: 5000....");
});

/*
app.listen(5000, (err)=>{
    if(err) throw err
})
*/
