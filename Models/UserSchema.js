const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username :{
        type : String,
        required : true,
    },
    Email :{
        type:String,
        required:true,
    },
    Phone :{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10
    },
    password:{
        type:String,
        required:true
    }

})

const User = mongoose.model('User',UserSchema);

module.exports = User;

