var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var request = require("request");
var queryString = require("querystring");

var longitude = 0;
var latitude = 0;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	var lat = queryString.parse('lat');
    var ltd = queryString.parse('ltd');
    res.render("home");

});

app.get("/test", function(req, res){
	res.render("test");
});

app.post("/location", function(req, res){
	var address = req.body.address;
	request("https://maps.googleapis.com/maps/api/geocode/json?address=" + address, function(err, res, body){
		var longitude = req.param('lat');
		var latitude = req.param('lng');
	});
	res.redirect("/?lat=" + latitude + "&ltd=" + latitude);
});

app.listen(5000, function(){
    console.log("Server started!");
});