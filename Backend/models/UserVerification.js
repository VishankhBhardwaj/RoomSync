const mongoose = require('mongoose')

const userVerification = new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        requires:true
    },
    Email:{
        type:Boolean,
        required:true
    },
    Phone:{
        type:Boolean,
        required:true
    },
    GovernmentId:{
        type:Boolean,
        required:true
    },
},{timestamps:true})

module.exports = mongoose.model("UserVerification",userVerification);