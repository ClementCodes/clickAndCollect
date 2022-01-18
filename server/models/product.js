import mongoose from "mongoose"





const productSchema = new mongoose.Schema({
    id: String, 
    name:String,
    category: {type: String, lowercase :true},
    filter:   String,
    price:   Number,
    
},{collection: "products"}
);



//Product c'est le parametre qui determine le nom du Schema

export default  mongoose.model("Product", productSchema)
  

