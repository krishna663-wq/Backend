const jwt = require("jsonwebtoken");
const User = require("../Models/UserSchema");
const bcrypt = require("bcrypt");
const {verifytoken} = require("./JWTverify.js")
exports.CreateUser = async(req, res)=>{
    const {username , Email,Phone,password} = req.body;
    console.log(password);
    try {
        const exestinguser = await User.findOne({Email: Email})
        console.log(Phone.toString);
        if(Phone.toString().length < 10){
            return res.status(501).json({message : "Invalid number"})
        }
        const newpassword = await bcrypt.hash(password,10);
        const Newuser = await User.create({
            username:username,
            Email : Email,
            Phone:Phone,
            password : newpassword
        });
 
        res.status(201).json({res: Newuser});
    } catch (error){
        res.status(500).json({message:error.message})

    }
}


exports.Login = async(req,res)=>{
    const {Email,password} = req.body;
    try{
        const exestinguser = await User.findOne({Email : Email})
        // console.log(password);
        if(exestinguser){
            // console.log(exestinguser);
            const pass = exestinguser.password;
            const check = await bcrypt.compare(password,pass);
             // true or false
            // console.log(exestinguser.password);
            // console.log(pass);
            
            if(check){
                const token = jwt.sign({exestinguser} , "Iorderedforyou")
                console.log(token)
                return res.status(200).json({message : "User Success ",Token : token})
            }
            return res.status(500).json({message : "password incorrect"})
        }
        res.status(404).json({message : "User not found"})
    } catch (error) {
        res.status(501).json({message : error.message})
    }
}
exports.getuser = async(req,res)=>{
    const Token = req.headers.authtoken;
    // console.log(token);
    if(!Token){
        return res.status(501).json({message:"Token missing"})
    }
    // const { id } = req.body; 
    try{
        const d_token = verifytoken(Token)
        const uid = d_token.exestinguser._id;
        if(!uid){
            return res.status(501).json({message : "Id is invalid"})
        }
        const userdata = await User.findById({_id:id})
        if(userdata){
            return res.status(200).json({response:userdata})
        }
        res.status(404).json({message:"Data not found"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
}


exports.UpdateUser = async(req,res)=>{
    const {id,username,phone,email,password} = req.body;
    // if(username && )
    try{
        const newdata = await User.findByIdAndUpdate({
            id : id,
            username:username,
            Phone:phone,
            Email:email,
            password:password
        })
        res.status(201).json({response : newdata});
    } catch(error){
        res.status(500).json({message:error.message})
    }
}
