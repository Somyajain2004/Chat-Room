const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

let username = localStorage.getItem('username');

if (!username) {
    username = prompt("Enter your display name:");
    if (!username) username = "Anonymous";
    localStorage.setItem('username', username);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        const messageData = {
            user: username,
            text: input.value
        };
        socket.emit('chat message', messageData);
        input.value = '';
    }
});

socket.on('chat history', (history) => {
    history.forEach((msg) => {
        const item = document.createElement('li');
        item.innerHTML = `<strong>${msg.user}</strong>: ${msg.text}`;
        messages.appendChild(item);
    });
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.innerHTML = `<strong>${msg.user}</strong>: ${msg.text}`;
    messages.appendChild(item);
});
