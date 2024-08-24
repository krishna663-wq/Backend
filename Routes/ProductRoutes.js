const express = require("express");
const { Createproduct, GetAllProduct } = require("../Middleware/ProductsMiddleware");
// console.log(express);

const ProductRoutes = express.Router();
console.log(ProductRoutes);


ProductRoutes.post("/Addproduct",Createproduct)
ProductRoutes.post("/getproduct",GetAllProduct)

module.exports = ProductRoutes;