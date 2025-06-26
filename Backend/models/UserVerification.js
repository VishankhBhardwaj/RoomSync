const mongoose = require('mongoose')

const userVerification = new mongoose.Schema({
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