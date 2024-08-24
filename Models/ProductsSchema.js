const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
    ProductName :{
        type:String,
        required:true
    },
    Description : {
        type:String,
        required:true,
        trim:true
    },
    Category :{
        type:String,
        required:true,
        trim:true
    },
    Price:{
        type:Number,
        required:true
    },
    Image:{
        type:String,
        required:true
    },
    OtherInformation :{
        type:String
    }
})

const Product = mongoose.model("Product",ProductsSchema);

module.exports = Product;