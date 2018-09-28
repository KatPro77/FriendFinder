//Dependencies

var express = require("express");
var bodyParser = require("body-parser");

//Express App

var app = express();
var PORT = process.env.PORT || 3000;


// //Directs Express to handle data
app.use(express.static(__dirname + "./app/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());



// //Directs server to routes
require("./app/routing/htmlRouting")(app);
require("./app/routing/apiRouting")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });