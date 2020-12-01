var express=require('express');
var app=express();

var fs=require('fs');

var file=process.argv[3];

var data=fs.readFileSync(file,"utf8");

var obj=JSON.parse(data);

app.get('/',(req,res)=>{
  res.send("Helloo");
})

app.get('/books',(req,res)=>{
  res.json(obj);
})
console.log("Listening to port!");
app.listen(process.argv[2]);
