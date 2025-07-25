const jwt = require('jsonwebtoken');
const userModel = require('../models/User');

exports.protectRoute = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: "Authorization header missing or malformed" });
        }

        const token = authHeader.split(' ')[1]; // Get the token after "Bearer"
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded.userId).select('-Password');
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Auth Error:", error.message);
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
};
