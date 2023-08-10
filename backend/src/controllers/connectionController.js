import {UserController} from "./userController.js";
import {MessageController} from "./messageController.js";
import User from "../models/user.js";

export class ConnectionController {
    constructor(io, socket) {
        this.socket = socket;

        new UserController(io, socket);

        new MessageController(io, socket);

        this.setDisconnectListener();
    }

    async setDisconnectListener(){
        this.socket.on('disconnect', async () => {
            const userId = this.socket.userId;
            console.log(userId)
            await User.findOneAndUpdate({ _id: userId }, { isOnline: false });
        });
    }
}