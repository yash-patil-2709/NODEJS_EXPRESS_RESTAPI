var express=require('express');
var app=express();

app.use('/public',express.static('public'));

app.get('/',function(req,res) {
  res.render('index');
});

app.listen(1010);
