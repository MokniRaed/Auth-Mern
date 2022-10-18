var jwt = require("jsonwebtoken");
const userSchema = require("../Models/user");

exports.isAuth = async (req, res,next) => {
  try {
    const token = req.header("Authorization");
    var decode = jwt.verify(token,process.env.privateKey);
    console.log(decode,"Decode");
    if(!decode){
        return res.status(400).send("You are Not authorized dude 😈")
    }
    const authUser = await userSchema.findById(decode.id)
    req.authUser = authUser
     next();
     
  } catch (err) {
    res.status(400).send("There is no token");
    console.log(err);
  }
};
