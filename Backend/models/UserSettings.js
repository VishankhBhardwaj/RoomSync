const mongoose = require('mongoose')

const userSettingsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isMarketingOptedIn: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

module.exports = mongoose.model("userSettings",userSettingsSchema);