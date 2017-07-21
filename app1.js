

var express=require("express");
var homePg=require("./dir/homePg.js");
var app=express();

app.set("views",__dirname+"\\"+"showOff");
app.set("view engine","jade");

app.use("/mami/",homePg);
app.get("/*",function(req,res,next){
    res.render ("homePg");
});

app.listen (8080);

console.log ("it's a start");
