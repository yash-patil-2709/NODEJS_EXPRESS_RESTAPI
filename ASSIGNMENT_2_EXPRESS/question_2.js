var express=require('express');
var app=express();

app.get('/',function(req,res){
  res.send('Hello!! Welcome');
});

app.get('/year/:age',function(req,res){
  var date=new Date();
  var curr_year=date.getFullYear();
  var year=curr_year-req.params.age;
  res.send('You were born in: ' +year);
});

app.listen(3000);
