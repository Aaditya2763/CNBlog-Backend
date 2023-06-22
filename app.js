 
 const express=require('express');
 const app=express();
 const cors = require("cors");
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
      `${process.env.DEVELOPMENT}`,
      `${process.env.CLIENT_URL}`,
    
      "http://localhost:3000",
      "https://aditya-react-blog-website.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);


// app.use(
//     cors({
//       origin: [
//         `${process.env.CLIENT_URL}`,
//         `${process.env.DEVELOPMENT}`,
//         `${process.env.ADMIN_URL}`,
//       ],
//       credentials: true,
//     })
//   );
  app.use((req, res, next) => {
    const allowedOrigins = [
      `${process.env.CLIENT_URL}`,
      `${process.env.DEVELOPMENT}`,
      `${process.env.ADMIN_URL}`,
    ];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    // res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
    // res.header("Access-Control-Allow-Origin", `${process.env.HOME_URL}`)
    // res.header("Access-Control-Allow-Origin", `${process.env.HOME_URL2}`)
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });
  


const port=process.env.port || 8080;


app.listen(port,(req,res)=>{
    console.log(`Server started at port ${port}`)
})