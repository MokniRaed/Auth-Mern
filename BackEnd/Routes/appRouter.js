const express = require("express");
const {
  home, signup, login
} = require("../Controllers/auth");
const { isAuth } = require("../MiddleWare/isAuth");
const { loginValidation,regiterValidation,validation } = require("../MiddleWare/registerValidation");


const appRouter = express.Router();

//Return home

appRouter.get("/", home);

//Add new user to database
 appRouter.post("/signup",regiterValidation,validation,signup );

 //Verification and login
 appRouter.post("/login",loginValidation,validation,login );

 appRouter.get("/account",isAuth, (req,res)=>{
  
  res.status(200).send(req.authUser)
 })




module.exports = appRouter;
