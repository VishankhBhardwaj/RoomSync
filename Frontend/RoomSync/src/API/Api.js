const BASE_URL = "http://localhost:3000/api";

export const API = {
  auth: {
    register: `${BASE_URL}/auth/register`,
    login: `${BASE_URL}/auth/login`,
  },

  verify: {
    email: `${BASE_URL}/verifyemail/EmailVerify`,
    phone: `${BASE_URL}/verifyphone/PhoneVerify`,
  },

  userInfo: {
    update: `${BASE_URL}/updateinfo/updateUserInfo`,
  },

  preferences: {
    update: `${BASE_URL}/updateUserPref/userPreferences`,
    uploadPhotos: `${BASE_URL}/updateUserPref/Photos`,
  },

  uploadedPhotos: {
    getPreferences: `${BASE_URL}/PhotosUploadedByUser/userPreferences`,
    getPhotos: `${BASE_URL}/PhotosUploadedByUser/Photos`,
  },

  verificationdata:{
    dataUpdate:`${BASE_URL}/userVerificationDataUpdate/VerificationDataUpdate`
  }
};
