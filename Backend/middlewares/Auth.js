const jwt = require('jsonwebtoken')
const userModel = require('../models/User');
exports.protectRoute = async(req,res,next)=>{
    try{
        const token = req.header.token;
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.savedUser._id).select('-Password');
        if(!user){
            return res.json({success:false,message:"User not found"});
        }
        req.user = user;
        next();
    }catch(error){
        console.log(error.message);
        return res.json({success:false,message:error.message});
    }
}