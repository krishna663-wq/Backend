const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const UserRoutes = require("./Routes/UserRoutes");
const ProductRoutes = require("./Routes/ProductRoutes");
const jwt = require("jsonwebtoken");
require("./connection/conn")
app.use(express.json())

app.use(bodyParser.urlencoded({extented:true}))
app.use(bodyParser.json())

app.use(ProductRoutes)
app.use(UserRoutes)

app.listen(3000,()=>{
    console.log("My Db is started on 3000")
})