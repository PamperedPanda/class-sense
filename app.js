var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.post("/location", function(req, res){
	var address = req.body.address
	https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Par
});

app.listen(5000, function(){
    console.log("Server started!");
});