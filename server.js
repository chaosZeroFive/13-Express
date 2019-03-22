require("./node_modules/dotenv").config();
const mysql = require("./node_modules/mysql");
const express = require("./node_modules/express");

var app = express();

// express methods
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// environment variables saved to .env
var PORT = process.env.PORT;

// mysql connection 
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "ff_db"
});

// connect to database
connection.connect(function (err) {
    if (err) {
        console.log("error connecting" + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

// routing requires
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listening
app.listen(PORT, function () {
    console.log("App Listening on http://localhost:" + PORT);
});