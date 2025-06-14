const UserInfoModel = require('../models/UserInfo');
const userModel = require('../models/User');

exports.userInfo = async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).json({ msg: 'Unauthorized: User not authenticated' });
    }
    const userId = req.user._id; 

    const { FirstName, LastName, Email, PhoneNumber, Occupation, DateOfBirth, Bio } = req.body;

    if (!PhoneNumber || !Occupation || !DateOfBirth || !Bio) {
        return res.status(400).json({ msg: 'Please provide all details' }); // ✅ fixed typo: satus -> status
    }

    try {
        const user = await userModel.findById(userId); 
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }


        if (FirstName) user.FirstName = FirstName;
        if (LastName) user.LastName = LastName;
        if (Email) user.Email = Email;
        await user.save();


        let userInfo = await UserInfoModel.findOne({ user: user._id });

        if (userInfo) {
            userInfo.PhoneNumber = PhoneNumber;
            userInfo.DateOfBirth = DateOfBirth;
            userInfo.Occupation = Occupation;
            userInfo.Bio = Bio;
            await userInfo.save();
        } else {
            userInfo = new UserInfoModel({
                user: user._id,
                PhoneNumber,
                DateOfBirth,
                Occupation,
                Bio
            });
            await userInfo.save();
        }

        return res.status(200).json({
            msg: 'Updated Info successfully',
            user,
            userInfo
        });

    } catch (err) {
        return res.status(500).json({
            msg: 'Server Error',
            err: err.message || err
        });
    }
};
