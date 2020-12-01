var express=require('express');
var app=express();

app.set('view engine','ejs');

var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});

app.get('/',function(req,res){
  res.send('Hello World');
});

app.get('/form',function(req,res){
  res.render( 'string',{qs: req.query});
});

app.post('/form',urlencodedParser,function(req,res){
  console.log(req.body.str.split('').reverse().join(''));
  res.render('string',{qs: req.query});
});
app.listen(4000);
