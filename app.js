 
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
 



app.use(express.urlencoded({extended:false}));
//it will work as pody-parser or urlencoder
app.use(express.json())
app.use(methodOverride('_method'))

app.use(
  cors({
    origin: [
      
      `http://localhost:3000`,
    `https://aditya-react-blog-website.vercel.app`
  
      
    ],
    
  })
);


  app.use(quotesRoutes);

const port=process.env.port || 8080;

app.get("/",(req,res)=>{
  res.send(`Server started at port ${port}`);
})

app.listen(port,(req,res)=>{
    console.log(`Server started at port ${port}`)
})