const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true
    },
    email :{
        type:String,
        required: true,
        unique:true
    },
    password :{
        type:String,
        required: true,
    },
    isAvatar:{
        type:Boolean,
        default:false,
    },
    avatarImg:{
        type:String,
        default:""
    },
});

module.exports = mongoose.model("Users",userSchema)