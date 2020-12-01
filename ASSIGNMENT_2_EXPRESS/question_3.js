var express=require('express');
var app=express();

app.get('/',function(req,res){
  res.send("Enter home in url");
});

app.get('/home',function(req,res){
  res.send("Hello World!!");
});

app.listen(process.argv[2]);
