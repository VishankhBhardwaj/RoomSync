const express = require('express')
const router = express.Router();
const {EmailAuth} = require('../Controllers/AuthController');
// const {PhoneAuth} = require('../Controllers/AuthController');
const {userVerify} = require('../Controllers/AuthController');
const {protectRoute} = require('../middlewares/Auth');
router.post('/EmailVerify',protectRoute,EmailAuth);
router.post('/VerificationDataUpdate',protectRoute,userVerify);
// router.post('/PhoneVerify',PhoneAuth);
module.exports = router;