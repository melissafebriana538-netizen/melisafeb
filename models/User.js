const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nim: String,
  university: String,
  avatar: String, // path file avatar
  preferences: {
    darkMode: { type: Boolean, default: false },
    language: { type: String, default: 'id' },
    notifQuiz: { type: Boolean, default: true },
    notifSound: { type: Boolean, default: false }
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);