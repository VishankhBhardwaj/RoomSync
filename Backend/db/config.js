const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)
.then(() => { console.log("connected to db") })
.catch((err) => { console.log("could not connect to database", err) });

