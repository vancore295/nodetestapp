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



var server = http.createServer(app);

//var connectionUrl = "mongodb://test:test@localhost:27017/nodetest1?readPreference=primary";
var connectionUrl = "mongodb://publicUser:thecatechasesthemoon@ds115712.mlab.com:15712/bkerncloud?readPreference=primary";
mongoose.connect(connectionUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('disconnected', console.log);
db.once("open", function() {
    controllers.init(app);
    console.log()
});

var port = 3001;
server.listen(port);