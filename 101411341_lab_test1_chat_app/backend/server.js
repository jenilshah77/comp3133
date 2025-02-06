require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("❌ ERROR: MongoDB URI is missing in .env file.");
    process.exit(1);
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ Error connecting to MongoDB:", err));

app.use(express.json());
app.use(cors());

io.on('connection', (socket) => {
    console.log(`⚡ User Connected: ${socket.id}`);

    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log(`👤 User joined room: ${room}`);
    });

    socket.on('sendMessage', ({ room, message, username }) => {
        io.to(room).emit('receiveMessage', { message, username });
    });

    socket.on('disconnect', () => {
        console.log('❌ User Disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
