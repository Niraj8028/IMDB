const mongoose= require("mongoose")
const{ ObjectId}= mongoose.Schema;

const productSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,       
    },
    description:{
        type: String,
        required: true,     
    },    
    category:{
        type: ObjectId ,
        ref:  "category",
        // required: true
    },
    photo:{
        data: Buffer,
        contentType: String
    }
}, {timestamps: true})

module.exports= mongoose.model("Product", productSchema);