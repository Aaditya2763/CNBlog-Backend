 
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
      
    `https://aditya-react-blog-website.vercel.app`
      `http://localhost:3000`,
      
    ],
    
  })
);
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, 
  Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
  });
  app.use(quotesRoutes);

const port=process.env.port || 8080;


app.listen(port,(req,res)=>{
    console.log(`Server started at port ${port}`)
})