// Requires
var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var morgan = require('morgan');

mongoose.Promise = Promise;

// Schema
var Article = require('./models/Article');

var app = express();
var PORT = process.env.PORT || 8080;

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('./public'));

mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(PORT, function() {
    console.log("🌎 listening on port %s", PORT);
});