 if(process.env.Node_Env !=='production'){
    require('dotenv').config();
}
 const express=require('express');
 const app=express();
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


app.get('/hello',(req,res)=>{
res.status(200).json({msg:'hello from server'});
})

app.use(cors({
    origin:[
        `https://aditya-react-blog-website.vercel.app`

      
    ],
    credentials: true,
}));

app.use((req, res, next) => {
    const allowedOrigins = [
        `https://aditya-react-blog-website.vercel.app`
    
    ];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
   
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });


app.use(express.urlencoded({extended:false}));
//it will work as pody-parser or urlencoder
app.use(express.json())
app.use(methodOverride('_method'))
app.use(quotesRoutes);


const port=process.env.port || 8080;


app.listen(port,(req,res)=>{
    console.log(`Server started at port ${port}`)
})