const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    name:String,
    role:{
        type:String,
        default:"admin",
        
    }
})

module.exports = mongoose.model("user",userSchema);