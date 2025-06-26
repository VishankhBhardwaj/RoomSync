const mongoose = require('mongoose')

const userPref = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    BudgetRange: {
        type: Number,
        require: true
    },
    PreferredLocation: {
        type: String,
        required: true
    },
    MoveInDate: {
        type: Date,
        required: true
    },
    CleanlinessLevel: {
        type: String,
        required: true
    },
    SocialLevel: {
        type: String,
        required: true
    },
    LifeStyleTraits: {
        type: String,
        required: true
    },
    Hobbies: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('UserPref', userPref);