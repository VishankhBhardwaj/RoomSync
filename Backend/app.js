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
app.use('/api/auth',userRoute);
app.use('/api/updateinfo',userInfoRoute);
app.use('/api/updateUserPref',userPrefRoute);
app.use("/api/PhotosUploadedByUser",userPhotos);
app.listen(PORT||5000,()=>{
    console.log("Server is running on port 3000");
})