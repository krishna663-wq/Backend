const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://krishna:krishuu123@cluster0.xtkmdcs.mongodb.net/").then(()=>{
    console.log("My db is connected")
}).catch((error)=>{
    console.log("Error occured",error)
})