const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  password: String,
  createon: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
