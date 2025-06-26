const userPreferencesModel = require('../models/UserPreferences');
const userModel = require('../models/User');
exports.userPreferences = async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).json({ msg: 'Unauthorized: User not authenticated' });
    }
    const userId = req.user._id;
    const { BudgetRange, PreferredLocation, MoveInDate, CleanlinessLevel, SocialLevel, LifeStyleTraits, Hobbies } = req.body;
    if (!BudgetRange || !PreferredLocation || !MoveInDate || !CleanlinessLevel || !SocialLevel || !LifeStyleTraits || !Hobbies) {
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
                    BudgetRange:BudgetRange,
                    PreferredLocation:PreferredLocation,
                    MoveInDate:MoveInDate,
                    CleanlinessLevel:CleanlinessLevel,
                    SocialLevel:SocialLevel,
                    LifeStyleTraits:LifeStyleTraits,
                    Hobbies:Hobbies
                });
                await preferences.save();
                return res.status(200).json({ msg: "Data enetered successfully" });
            }
        } catch (err) {
            return res.status(500).json({
                msg: 'Server Error',
                err: err.message || err
            });
        }
    }
}