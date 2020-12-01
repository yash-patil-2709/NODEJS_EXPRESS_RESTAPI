const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json());


const mongoose=require('mongoose');

//connect
mongoose.connect("mongodb+srv://yash123:yash123@mongodb-nodejs.apzxb.mongodb.net/nodeexpress", ()=>{
  console.log("Database connected successfully");
});

require('./qsn_1_db');
const Invent=mongoose.model('Inventory');

app.get('/', (req,res)=>{
  res.send("Heyy successfully connected");
});



app.get('/inventory',(req,res)=>{
  Invent.find().then((inventories)=>{
    console.log(inventories);
    res.json(inventories)
  }).catch((err)=>{
    if(err){
      throw err;
    }
  })
});

app.get('/inventory/:name',(req,res)=>{
   Invent.find({name:req.params.name},(err,data)=>{
     if (err) throw err;
     res.json(data);
   })
})
app.listen(8081,()=>{
  console.log("Up and running server!!");
})
