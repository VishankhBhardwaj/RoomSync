const mongoose = require('mongoose');
const { userInfo,userData,checkout,getSessionDetails,fetchPaymentInfo } = require('../Controllers/UserInfoController');
const express = require('express');
const router = express.Router();

router.post('/create-checkout-session',checkout)
router.get('/fetchPaymentInfo',fetchPaymentInfo)
router.post('/get-session-details',getSessionDetails)
router.post('/updateUserInfo',userInfo);
router.get('/userInfo',userData);
module.exports=router;