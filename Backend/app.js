const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('../Backend/db/config');
app.use(cors());
app.use(express.json({ limit: "100mb" })); 
app.use(express.urlencoded({ limit: "100mb", extended: true }));

const PORT=process.env.PORT;

//import routes

const userRoute=require('../Backend/routes/Login');
const userInfoRoute=require('../Backend/routes/UserInfo');
const userPrefRoute = require('./routes/Profile');
const userPhotos = require("./routes/Profile");
const userVerification = require("./routes/Auth");
const userVerifyDataUpdate = require('./routes/Auth');
const chatRoute = require('./routes/Chatbot');
const data = require('./routes/Profile');
// const userPhoneVerification = require("./routes/Auth");
app.use('/api/auth',userRoute);
app.use('/api/updateinfo',userInfoRoute);
app.use('/api/userData',userInfoRoute);
app.use('/api/payment',userInfoRoute);
app.use('/api/updateUserPref',userPrefRoute);
app.use('/api/Pref',userPrefRoute);
app.use("/api/PhotosUploadedByUser",userPhotos);
app.use('/api/verifyemail',userVerification);
app.use('/api/userVerificationDataUpdate',userVerifyDataUpdate);
app.use('/api/allData',data);
app.use('/api/chat', chatRoute);

// app.use('/api/verifyphone',userPhoneVerification);
app.listen(PORT||5000,()=>{
    console.log("Server is running on port 3000");
})