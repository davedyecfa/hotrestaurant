/**
 * Created by esterlingaccime on 4/22/17.
 */
var express = require("express"),
    bodyParser = require("body-parser"),
    mysql = require("mysql");



var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
});


connection.connect();

connection.query("", function (req, res) {

});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
