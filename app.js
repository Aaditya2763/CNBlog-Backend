 
 const express=require('express');
 const app=express();
//  const cors = require("cors");
require("dotenv").config();
 const mongoose=require('mongoose')
const quotesRoutes=require('./api/quotesRoutes')
const seedDb=require('./seed')
const cors=require('cors')
const methodOverride=require('method-override')
const db_Url=process.env.DB_URL;
 mongoose.connect(db_Url)
 .then(()=>console.log('DB connected'))
 .catch((e)=>console.log(e));
 

//seeding data from dummy_Quotes
// seedDb()

app.use(express.urlencoded({extended:false}));
//it will work as pody-parser or urlencoder
app.use(express.json())
app.use(methodOverride('_method'))

app.use(
  cors({
    origin: [
      
    
      `http://localhost:3000`,
      
    ],
    
  })
);


  app.use(quotesRoutes)

const port=process.env.port || 8080;


app.listen(port,(req,res)=>{
    console.log(`Server started at port ${port}`)
})