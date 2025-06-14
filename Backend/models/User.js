const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required: true,
        maxlength: 255,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    Password:{
        type:String,
        required:true
    }
},{timestamps:true});



module.exports=mongoose.model('User',userSchema)