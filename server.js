var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

// Setting up the express app to handle data parsing 
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Routing files 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Starting the server
app.listen(PORT, function () {
    console.log("App listening at http://localhost:" + PORT);
});