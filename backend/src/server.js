import dotenv from 'dotenv';
dotenv.config()

import cors from 'cors'
import express from 'express'
import { createServer } from 'http'
import mongoose from 'mongoose'
import { Server } from 'socket.io'
import {FRONTEND_LINK, MONGODB_URI, PORT} from "./config.js";
import {ConnectionController} from "./controllers/connectionController.js";

const app = express();

app.use(
    cors({
        origin: FRONTEND_LINK
    })
)
app.use(express.json())

try {
    await mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log('Successful connection to MongoDB');
} catch (error) {
    console.error('Error when connecting to MongoDB:', error);
    throw error;
}

const server = createServer(app);

const io = new Server(server, {
    cors: FRONTEND_LINK,
    serveClient: false,
})

io.on('connection', (socket) => {
    new ConnectionController(io, socket);
})

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})