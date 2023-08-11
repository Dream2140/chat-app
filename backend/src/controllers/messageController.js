import {messageService} from "../services/messageService.js";
import {SOCKET_EVENTS} from "../constants/socketEvents.js";

export class MessageController {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
        this.roomId = socket.roomId

        this.getMessageListListener();

        this.addMessageListener();
    }

    postSavedMessage = (message) => {
        this.socket.emit(SOCKET_EVENTS.SEND_MESSAGE, message);
        this.socket.broadcast.emit(SOCKET_EVENTS.SEND_MESSAGE, message);
    }

    getMessageListListener() {
        this.socket.on(SOCKET_EVENTS.LOAD_MESSAGE_LIST, async ({recipientId, senderId}) => {

            const messageList = await messageService.getMessageList(recipientId, senderId)

            this.socket.emit(SOCKET_EVENTS.LOAD_MESSAGE_LIST, messageList);
        })
    }

    addMessageListener() {
        this.socket.on(SOCKET_EVENTS.SEND_MESSAGE, async (messageData) => {

            const newMessage = await messageService.saveMessage(messageData);

            this.postSavedMessage(newMessage);
        })
    }

}