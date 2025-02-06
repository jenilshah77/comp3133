const mongoose = require('mongoose');

const groupMessageSchema = new mongoose.Schema({
    sender: { type: String, required: true },
    groupId: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('GroupMessage', groupMessageSchema);
