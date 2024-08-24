const Product = require("../Models/ProductsSchema")
exports.Createproduct = async(req,res)=>{
    const data = req.body;
    try{
        const newproduct = await Product.create(data);
        res.status(201).json({response : newproduct});
    } catch (error){
        res.status(500).json({message : "Problem in internal server", error:error.message});
    }
}

exports.GetAllProduct = async(req,res)=>{
    const Token = req.headers.authtoken;
    try{
        const verifieddata = verifytoken(Token);
        if(!verification.exestinguser._id){
            return res.status(501).json({message:"Gaddari karibe"})
        }
        const data = await Product.find({});
        res.status(200).json({data});
    } catch (error){
        res.status(501).json({message:"Somewhere mistake",error:error.message});
    }
}

exports.GetProductById = async(req,res)=>{
    const id = req.params.id;
    const Token = req.header.authtoken;
    try{
        const verifieddata = verifytoken(Token);
        if(!verification.exestinguser._id){
            return res.status(501).json({message:"Gaddari karibe"})
        }
        const data = await Product.findOne({_id:id});
        res.status(201).json({data});
    } catch(error){
        res.status(501).json({message : "somewhere you do mistake"})

    }
}