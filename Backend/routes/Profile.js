const express = require('express');
const {userPreferences,showUserPreference} = require('../Controllers/UserPreferencesController');
const {UserUploadedPhotos,showUseruploadedPhotos} = require("../Controllers/UserPhotosController");
const router = express.Router();

router.post('/userPreferences',userPreferences);
router.post('/Photos',UserUploadedPhotos);
router.get('/showData',showUserPreference);
router.get('/photosData',showUseruploadedPhotos);
module.exports = router;