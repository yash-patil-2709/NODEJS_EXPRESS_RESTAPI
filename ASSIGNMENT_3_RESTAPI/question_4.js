const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json());


const mongoose=require('mongoose');

//connect
mongoose.connect("mongodb+srv://yash123:yash123@mongodb-nodejs.apzxb.mongodb.net/nodeexpress", ()=>{
  console.log("Database connected successfully");
});

require('./qsn_4_db');
const Invent=mongoose.model('Inventory');

app.get('/', (req,res)=>{
  res.send("Heyy successfully connected");
});
/*
app.post('/inventory',(req,res)=>{

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
*/
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
});
//delete all
app.delete('/inventory',(req,res)=>{
  Invent.deleteMany({}).then(()=>{
    Invent.find().then((inventories)=>{
      console.log(inventories);
      res.json(inventories);
    })
  })
});

//delete name
app.delete('/inventory/:name',(req,res)=>{
  Invent.deleteOne({name:req.params.name}).then(()=>{
    Invent.find({}).then((inventories)=>{
      console.log(inventories);
      res.json(inventories);
    })
  })
});
app.listen(8083,()=>{
  console.log("Up and running server!!");
})
