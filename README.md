# Chat-Room

A simple real-time chat application built using **Node.js**, **Express**, and **Socket.IO**. It allows multiple users to chat with each other in real-time through a web interface. Users can enter a display name and see live messages from all connected clients, along with message history.

---

## Features

- Real-time bi-directional chat using WebSockets
- Socket.IO-based server-client communication
- In-memory message history shown to new users
- Anonymous users with custom display names (no login required)
- Dark-themed minimal UI

---

## Tech Stack

- **Backend:** Node.js, Express, Socket.IO
- **Frontend:** HTML, CSS, JavaScript
- **Deployment:** Render

---

## Installation & Setup

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node server.js
   ```

4. **Open in your browser**
   ```
   http://localhost:3000
   ```

---

## How It Works (Brief)

- Users visit the site and are prompted to enter a display name
- When they type and send a message, it's sent via Socket.IO to the server
- The server broadcasts that message to all connected clients
- Message history is stored in-memory and sent to newly joined users
- No login/signup required — everything happens in real time via sockets

---

## Demo Video :

https://github.com/user-attachments/assets/2e8bb13e-4e45-4dd2-b830-03007f374dbd

## Two-sided chat Demo :

![Screenshot 2025-06-22 190701](https://github.com/user-attachments/assets/2a66593a-5756-4442-9518-efb8b833600d)
