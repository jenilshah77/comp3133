const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// POST route for sending a group message
router.post('/send/group', messageController.sendGroupMessage);

// POST route for sending a private message
router.post('/send/private', messageController.sendPrivateMessage);

module.exports = router;
