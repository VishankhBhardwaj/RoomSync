const userModel = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // ⬅️ You missed this!
require('dotenv').config();

// REGISTER
exports.registerUser = async (req, res) => {
    
    const { FirstName, LastName, Email, Password } = req.body;
    
    if (!FirstName || !LastName || !Email || !Password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const existingUser = await userModel.findOne({ Email });
        if (existingUser) {
            return res.status(409).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(Password, salt);

        const user = new userModel({
            FirstName,
            LastName,
            Email,
            Password: hash,
        });

        const savedUser = await user.save();

        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        return res.status(201).json({
            msg: 'User registered successfully',
            token,
            user: {
                id: savedUser._id,
                FirstName: savedUser.FirstName,
                LastName: savedUser.LastName,
                Email: savedUser.Email,
            },
        });
    } catch (err) {
        return res.status(500).json({ msg: 'Server error' });
    }
};

// LOGIN
exports.loginUser = async (req, res) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).json({ msg: 'Please provide all details' });
    }

    try {
        const user = await userModel.findOne({ Email });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        return res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                FirstName: user.FirstName,
                LastName: user.LastName,
                Email: user.Email,
            },
        });
    } catch (err) {
        return res.status(500).json({ msg: 'Server error' });
    }
};
