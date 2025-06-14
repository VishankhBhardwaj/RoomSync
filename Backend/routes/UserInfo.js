const mongoose = require('mongoose');
const { userInfo } = require('../Controllers/UserInfoController');
const express = require('express');
const router = express.Router();


router.post('/updateUserInfo',userInfo);

module.exports=router;