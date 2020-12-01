const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json());


const mongoose=require('mongoose');

//connect
mongoose.connect("mongodb+srv://yash123:yash123@mongodb-nodejs.apzxb.mongodb.net/nodeexpress", ()=>{
  console.log("Database connected successfully");
});

require('./qsn_3_db');
const Invent=mongoose.model('Inventory');

app.get('/', (req,res)=>{
  res.send("Heyy successfully connected");
});

app.post('/inventory',(req,res)=>{
  //create function
/*  console.log(req.body);
  res.send('Testing successful'); */

  var invent={
    name:req.body.name,
    quantity:req.body.quantity
  }
  var inventory=new Invent(invent);

  inventory.save().then(()=>{
    console.log("New inventory created");
  }).catch((err)=>{
    if (err) {
      throw err;
    }
  })
  res.send("A new inventory created with success");
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
