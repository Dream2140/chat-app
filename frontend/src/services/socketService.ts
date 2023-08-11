import {io, Socket} from "socket.io-client";


import {WEBSOCKET_EVENTS} from "../constants/websocketEvents";
import {MessageDto} from "../types/messageDto";
import {API_URL} from "../config/env";
import {ServerToClientEvents} from "../types/socket";

class SocketService {
    private readonly socket: Socket = io(API_URL);

    sendMessage(messageData: MessageDto) {
        this.socket.emit(WEBSOCKET_EVENTS.SEND_MESSAGE, messageData);
    }

    subscribeToMessages(messageHandler: ServerToClientEvents['message']) {
        this.socket.on(WEBSOCKET_EVENTS.SEND_MESSAGE, messageHandler);
    }

    subscribeToUserList(userListHandler: ServerToClientEvents['userList']) {
        this.socket.on(WEBSOCKET_EVENTS.GET_USER_LIST, userListHandler);
    }

    emitNewUser() {
        this.socket.emit(WEBSOCKET_EVENTS.INIT_NEW_USER);
    }

    subscribeToNewUser(newUserHandler: ServerToClientEvents['newUser']) {
        this.socket.on(WEBSOCKET_EVENTS.INIT_NEW_USER, newUserHandler);
    }

    changeOnlineStatus(userId: string, isOnline: boolean) {
        this.socket.emit(WEBSOCKET_EVENTS.CHANGE_USER_STATUS, {
            _id: userId,
            isOnline
        });
    }

    emitGetMessageList(recipientId: string, senderId: string) {

        this.socket.emit(WEBSOCKET_EVENTS.LOAD_MESSAGE_LIST, {recipientId, senderId});
    }

    subscribeToGetMessageListListener(userListHandler: ServerToClientEvents['messageList']) {
        this.socket.on(WEBSOCKET_EVENTS.LOAD_MESSAGE_LIST, userListHandler);
    }

    subscribeToUserTypingListener(userTypingHandler: ServerToClientEvents['userTyping']) {
        this.socket.on(WEBSOCKET_EVENTS.SET_USER_IS_TYPING, userTypingHandler);
    }

    emmitUserIsTyping(id: string) {
        this.socket.emit(WEBSOCKET_EVENTS.SET_USER_IS_TYPING, {id});
    }

    subscribeToUserStopTypingListener(userStopTypingHandler: ServerToClientEvents['userTyping']) {
        this.socket.on(WEBSOCKET_EVENTS.SET_USER_STOP_TYPING, userStopTypingHandler);
    }

    emmitUserStopTyping() {
        this.socket.emit(WEBSOCKET_EVENTS.SET_USER_STOP_TYPING);
    }

    subscribeBotMessageListener(botMessageHandler: ServerToClientEvents['botMessage']) {
        this.socket.on(WEBSOCKET_EVENTS.BOT_MESSAGE, botMessageHandler);
    }

    emmitBotMessage(messageData: MessageDto) {
        this.socket.emit(WEBSOCKET_EVENTS.BOT_MESSAGE, {messageData});
    }
}

export const socketService = new SocketService();