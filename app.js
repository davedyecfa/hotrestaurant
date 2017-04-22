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

var reservations = [];
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

app.post("/api/reservations", function (req, res) {

    var data = req.body;

    reservations.push(data);
    res.json(true);
});


app.get("/api", function (req, res) {
    res.json(reservations);
});


app.get("/api/current", function (req, res) {
    var data = reservations.slice(0, 5);
    res.json(data);
});



app.get("/api/wait", function (req, res) {
    var data = reservations.slice(6, reservations.length);
    res.json(data);
});
app.post("/api/clear", function (req, res) {
    reservations = [];
    res.json("");
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


