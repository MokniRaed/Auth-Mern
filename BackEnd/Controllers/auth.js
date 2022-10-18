const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

const userSchema = require("../Models/user");

exports.home = (req, res) => {
  try {
    res.send("<h1>We are rocking 🚀</h1>");
  } catch (err) {
    console.log(err);
  }
};

exports.signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const userExist = await userSchema.findOne({ email });
    // check if the new user exist in the database
    if (userExist) {
      return res.status(404).send("Already exist !");
    }
    // If not we will add new user to the database
    const newUser = await new userSchema(req.body);

    //Hashing the password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    newUser.password = hash;

    // Create token JWT
    const payload = {id:newUser._id} 
    var  token = jwt.sign(payload,process.env.privateKey)

    newUser.save();
    res.status(200).send({msg:"Our User",newUser,token});
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const {email,password}= req.body;
    const userCheck = await userSchema.findOne({email})

    //Check if the user is exist
    if(!userCheck){
      return res.status(400).send("user not found");
    }
    //Compare the hashed password with the user password
    const match = await bcrypt.compare(password,userCheck.password)
    if(!match){
      return res.send("wrong password!")
    }

     // Create token JWT
     const payload = {id:userCheck._id} 
     var  token = jwt.sign(payload,process.env.privateKey)

     res.status(200).send({msg:"token",token,userCheck})
 

  } catch (err) {
    console.log(err);
  }
};
