//Dependencies

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//Express App

var app = express();
var PORT = process.env.PORT || 3000;


// //Directs Express to handle data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// //Directs server to routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });