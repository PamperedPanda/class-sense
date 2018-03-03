var express = require('express');
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});
app.get(req, res)

app.listen(5000);
console.log('server is running')