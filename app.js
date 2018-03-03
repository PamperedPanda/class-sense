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
	res.send
});

app.listen(5000, function(){
    console.log("Server started!");
});