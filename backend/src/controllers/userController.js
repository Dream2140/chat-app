import {SOCKET_EVENTS} from "../constants/socketEvents.js";
import {userService} from "../services/userService.js";
import {userSocketMap} from "../constants/userSocketMap.js";

export class UserController {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;

        this.initUserListener();

        this.sendUserList();

        this.connectUserListener();

        this.initUserTypingListener();

        this.initUserStopTypingListener();
    }

    initUserListener() {
        this.socket.on(SOCKET_EVENTS.INIT_NEW_USER, async () => {

            const newUserData = await userService.saveUser();

            userSocketMap.set(newUserData._id, this.socket.id);

            this.io.to(this.socket.id).emit(SOCKET_EVENTS.INIT_NEW_USER, newUserData);

            await this.sendUserList();
        })
    }


    async sendUserList() {

        const users = await userService.getUserList();

        this.io.emit(SOCKET_EVENTS.GET_USER_LIST, users);

    }

    async connectUserListener() {
        this.socket.on(SOCKET_EVENTS.CHANGE_USER_STATUS, async ({_id, isOnline}) => {

            await userService.setOnlineStatus(_id, isOnline);

            await this.sendUserList();

            userSocketMap.set(_id, this.socket.id)

        })
    }

    initUserTypingListener() {

        this.socket.on(SOCKET_EVENTS.SET_USER_IS_TYPING, async ({recipientId, senderId}) => {
            const recipientSocketId = userSocketMap.get(recipientId);
            this.socket.to(recipientSocketId).emit(SOCKET_EVENTS.SET_USER_IS_TYPING, senderId);
        })
    }

    initUserStopTypingListener() {

        this.socket.on(SOCKET_EVENTS.SET_USER_STOP_TYPING, async (user) => {
            this.socket.broadcast.emit(SOCKET_EVENTS.SET_USER_STOP_TYPING, user);
        })
    }
}