const mongoose = require('mongoose');
const { userInfo,userData,checkout,getSessionDetails,fetchPaymentInfo,getMarketingDetails,setMarketingDetails } = require('../Controllers/UserInfoController');
const express = require('express');
const {protectRoute} = require('../middlewares/Auth');
const router = express.Router();

router.post('/create-checkout-session',protectRoute,checkout);
router.get('/fetchPaymentInfo',protectRoute,fetchPaymentInfo);
router.post('/get-session-details',protectRoute,getSessionDetails);
router.post('/updateUserInfo',protectRoute,userInfo);
router.get('/userInfo',protectRoute,userData);
router.get('/marketing',protectRoute,getMarketingDetails)
router.post('/setMarketing',protectRoute,setMarketingDetails);
module.exports=router;