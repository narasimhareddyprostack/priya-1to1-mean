const http_priya = require("http");
const port = 4000;

let s_priya = http_priya.createServer(function (request, response) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plaintext");
  response.end("Hello");
});
s_priya.listen(port, function (err) {
  console.log("Server running....");
});

//localhost:4000   --- root
// creating Server
// managin the routing
// parsing url
// security concern

//plain nodejs - very difficulty..

// As a developer, need to care about business logic.
// Express giving , as middleware to doing all activites.

//Hapi js instead of hap


//client - request - API -- express(handler(server Program)) - fetch database