/**
 * Created by esterlingaccime on 4/22/17.
 */
var express = require("express"),
    bodyParser = require("body-parser"),
    mysql = require("mysql"),
    path = require("path");


var PORT = 8080;
var connection = mysql.createConnection({
    host     : 'localhost',
    port     :  3307,
    user     : 'root',
    password : 'ZZZZ',
    database : 'hotrestaurant'
});


connection.connect();

connection.query("", function (req, res) {

});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
// =============================================================


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "makereservation.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


