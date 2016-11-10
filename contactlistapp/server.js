// Connect node to express
var express = require('express');
var app = express();

// server.js to send index.html data to the view/browser static file
app.use(express.static(__dirname + "/public"));


/*
app.get('/', function (req, res){
  res.send("Hello World from server.js");
});
*/

// Message that server is running
app.listen(3000);
console.log("Server running on port 3000");
