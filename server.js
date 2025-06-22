const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let messages = [];

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    // Send chat history to new user
    socket.emit('chat history', messages);

    // Receive message
    socket.on('chat message', (msg) => {
        messages.push(msg); // msg = { user, text }
        io.emit('chat message', msg); // broadcast to all clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});
