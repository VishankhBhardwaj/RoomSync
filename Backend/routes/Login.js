const mongoose = require('mongoose');
const { registerUser, loginUser } = require('../Controllers/AuthController')
const { userInfo } = require('../Controllers/UserInfoController');
const express = require('express');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
module.exports = router;
