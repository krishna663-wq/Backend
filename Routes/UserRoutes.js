const express = require("express");
const { model } = require("mongoose");
const { CreateUser, Login, getuser, UpdateUser } = require("../Middleware/UserMiddleware");

const UserRoutes = express.Router();

UserRoutes.post('/signup', CreateUser) // Here I need to give middle waala 
UserRoutes.post('/login',Login)
UserRoutes.post('/getuser',getuser)
UserRoutes.post('/UpdateUser',UpdateUser)
module.exports = UserRoutes;