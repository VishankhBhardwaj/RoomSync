const express = require('express')
const router = express.Router();
const {EmailAuth} = require('../Controllers/AuthController');
// const {PhoneAuth} = require('../Controllers/AuthController');
const {userVerify} = require('../Controllers/AuthController');
router.post('/EmailVerify',EmailAuth);
router.post('/VerificationDataUpdate',userVerify);
// router.post('/PhoneVerify',PhoneAuth);
module.exports = router;