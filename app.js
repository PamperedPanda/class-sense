var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var request = require("request");

var longitude = 0;
var latitude = 0;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");

});

app.post("/location", function(req, res){
	var address = req.body.address;

	request("https://maps.googleapis.com/maps/api/geocode/json?address=" + address, function(err, res, body){
		var longitude = req.param('lat');
		var latitude = req.param('lng');
	})
	res.send(longitude + " " + latitude);
	res.redirect("/", {lat: latitude, ltd:latitude});
});

app.listen(5000, function(){
    console.log("Server started!");
});