const mongoose = require('mongoose');


const UserPaymentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    Subscription:{
        type:Boolean,
        default:false
    },
    Date:{
        type:Date,
        default:null
    },
    Invoice: [{
        type: mongoose.Schema.Types.Mixed,
        required: false
    }]
},{timestamps:true})
module.exports = mongoose.model("userPayments", UserPaymentSchema);