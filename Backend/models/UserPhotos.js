const mongoose = require("mongoose")

const userPhotosUploaded = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    photos: [
        {
            photoUrl: {
                type: String,
                required: true
            }
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model("userPhotosUploaded",userPhotosUploaded);