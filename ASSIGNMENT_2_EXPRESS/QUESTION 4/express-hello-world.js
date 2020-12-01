var express=require('express');
var app=express();

app.get('/',function(req,res){
  res.send('Hello World');
});

app.get('/time',function(req,res){
  var date=new Date();
  var date_convert=date.toISOString();
  res.send(date_convert);
});

let port=process.argv[2];
//console.log(port);

if(port==undefined){
  app.listen(8080);
  console.log("Listening to port 8080");
}
else{
  app.listen(port);
  console.log("Listening to port:" +port);
}
