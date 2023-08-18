import {UserController} from "./userController.js";
import {MessageController} from "./messageController.js";
import User from "../models/user.js";
import {BotController} from "./botController.js";
import {SOCKET_EVENTS} from "../constants/socketEvents.js";
import {userSocketMap} from "../constants/userSocketMap.js";

export class ConnectionController {
    constructor(io, socket) {
        this.socket = socket;

        this.user = new UserController(io, socket);
        this.message = new MessageController(io, socket);
        this.bot = new BotController(io, socket)

        this.setDisconnectListener();
    }

    async setDisconnectListener(){
        this.socket.on(SOCKET_EVENTS.DISCONNECT, async  () => {
            let userId = null;

            for (let id of userSocketMap.keys()) {
                userId = id;
            }

            await User.findOneAndUpdate({ _id: userId }, { isOnline: false });
            await this.user.sendUserList();
        });
    }
}