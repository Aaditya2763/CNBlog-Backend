
const mongoose =require('mongoose');
  

const quotesSchema=new mongoose.Schema(
    {
        author:{
            type:String
        },
        blogDescription:{
          type:String
        },
        blogTitle:{
            type:String
        },
        imageUrl1:{
            type:String
        },
        imageUrl2:{
            type:String
        }
    }
)




const quotes=mongoose.model('quotes',quotesSchema);

module.exports=quotes