const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  PhoneNumber: {
    type: Number,
    default: null
  },
  DateOfBirth: {
    type: Date,
    default: null
  },
  Occupation: {
    type: String,
    default: ''
  },
  Bio: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('UserInfo', userInfoSchema);
