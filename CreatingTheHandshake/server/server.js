import dotenv from 'dotenv';
import express from 'express';
import "./config/mongoose.config.js";
import cors from 'cors';
import http from 'http';
import {Server} from 'socket.io';

dotenv.config();
const port = process.env.PORT;
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

// Middleware
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// Socket.io connection handler
io.on("connection", (socket) => {
    console.log("User connected, socket id=" + socket.id);
    socket.on("sendMessage", (data) => {
        console.log(data);
        socket.broadcast.emit("receiveMessage", data);
    })
});

// Start server
server.listen(port, () => {
    console.log(`Listening at Port ${port}`);
});