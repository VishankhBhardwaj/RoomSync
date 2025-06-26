const express = require('express');
const {userPreferences} = require('../Controllers/UserPreferencesController');
const {UserUploadedPhotos} = require("../Controllers/UserPhotosController");
const router = express.Router();

router.post('/userPreferences',userPreferences);
router.post('/Photos',UserUploadedPhotos);
module.exports = router;