var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var controllers = require("./controllers");

app.set("view engine", "vash");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

controllers.init(app);

var server = http.createServer(app);
mongoose.connect("mongodb://test:test@localhost:27017/nodetest1?readPreference=primary");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('disconnected', console.log);
db.once("open", console.log);

server.listen(80);