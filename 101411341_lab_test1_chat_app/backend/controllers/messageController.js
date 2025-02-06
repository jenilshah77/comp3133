const GroupMessage = require('../models/GroupMessage'); // GroupMessage model
const PrivateMessage = require('../models/PrivateMessage'); // PrivateMessage model

// Send a group message
const sendGroupMessage = (req, res) => {
    const { sender, groupId, message } = req.body;

    const newMessage = new GroupMessage({
        sender,
        groupId,
        message,
        timestamp: new Date(),
    });

    newMessage.save()
        .then((savedMessage) => {
            res.status(201).json(savedMessage);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
};

// Send a private message
const sendPrivateMessage = (req, res) => {
    const { sender, receiver, message } = req.body;

    const newMessage = new PrivateMessage({
        sender,
        receiver,
        message,
        timestamp: new Date(),
    });

    newMessage.save()
        .then((savedMessage) => {
            res.status(201).json(savedMessage);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
};

module.exports = {
    sendGroupMessage,
    sendPrivateMessage,
};
