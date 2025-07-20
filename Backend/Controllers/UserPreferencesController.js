const userPreferencesModel = require('../models/UserPreferences');
const userModel = require('../models/User');
exports.userPreferences = async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).json({ msg: 'Unauthorized: User not authenticated' });
    }
    const userId = req.user._id;
    const { budget, location, moveInDate, cleanliness, social, lifestyle, interest } = req.body;
    if (!budget || !location || !moveInDate || !cleanliness || !social || !lifestyle || !interest) {
        return res.status(400).json({ msg: "please provide all details" });
    }
    else {
        try {
            const user = await userModel.findById(userId);
            if (!user) {
                return res.status(401).json({ msg: "User not Found" });
            } else {
                const preferences = new userPreferencesModel({
                    user: userId,
                    BudgetRange: budget,
                    PreferredLocation: location,
                    MoveInDate: moveInDate,
                    CleanlinessLevel: cleanliness,
                    SocialLevel: social,
                    LifeStyleTraits: lifestyle,
                    Hobbies: interest
                });
                await preferences.save();
                return res.status(200).json({ msg: "Data entered successfully" });
            }
        } catch (err) {
            return res.status(500).json({
                msg: 'Server Error',
                err: err.message || err
            });
        }
    }
}
exports.showUserPreference = async (req, res) => {
    // if (!req.user || !req.user._id) {
    //     return res.status(401).json({ msg: 'Unauthorized: User not authenticated' });
    // }
    try {
        const data = await userPreferencesModel.find().populate('user','-Password');
        if (!data) {
            return res.status(404).json({ msg: "No preferences found" });
        }
        else {
            return res.status(200).json(data);
        }
    }catch(err){
        return res.status(500).json({
            msg:"Server Error",
            error:err
        })
    }
}