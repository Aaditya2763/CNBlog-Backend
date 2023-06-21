 const express=require('express');
 const router=express.Router();
 const Quote=require('../Model/Quote')



 router.get("/quotes",async(req,res)=>{
try{
   const AllQuotes= await Quote.find({});
 res.status(200).json(AllQuotes)
}
catch(e){
    res.status(400).json({msg:"Something went wrong"})
}
 })
  





 router.post("/quotes/new", async(req,res)=>{
     try{
         const {author ,blogDescription,blogTitle,imageUrl1,imageUrl2}=req.body;
         const newQuote=await Quote.create({author,blogDescription,blogTitle,imageUrl1,imageUrl2});
         console.log (res);
         res.status(200).json(newQuote);


     }
     catch(e){
        res.status(400).json({msg:"Can not craete new  quote"})
     }
    })






      router.get('/quotes/:id',async(req,res)=>{
     try{
         const{id}=req.params;
        const quote= await Quote.findById(id);
         res.status(200).json(quote)
     }
     catch(e){
        
         res.status(400).json("unable to fetch");

     }
 })



 
 router.patch('/quotes/:id',async(req,res)=>{
    try{
        const{id}=req.params;
        const{author,blogDescription,blogTitle,imageUrl1,imageUrl2}=req.body;
       
     
 const quotes= await Quote.findByIdAndUpdate(id,{author,blogDescription,blogTitle,imageUrl1,imageUrl2});
   res.status(200).json(quotes)
    console.log(quotes);
    }
    catch(e){
       
        res.status(400).json("unable to fetch");

    }
})




 router.delete('/quotes/:id',async(req,res)=>{
     try{
         //note we cant store the results in a constant like res  because it is a keyword
           const {id}=req.params;
        await Quote.findByIdAndDelete(id)
           res.status(200).json({msg:"Quote deleted successfully"})
     }
     catch(e){
        res.status(400).json({msg:"Unable to delete"})
        
     }
 })

















 module.exports=router;