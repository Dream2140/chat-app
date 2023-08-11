import {BOT_ID} from "../constants/bots.js";
import {echoBot} from "../bots/echoBot.js";
import {reverseBot} from "../bots/reverseBot.js";
import {spamBot} from "../bots/spamBot.js";
import {messageService} from "../services/messageService.js";
import {SOCKET_EVENTS} from "../constants/socketEvents.js";

export class BotController {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;

        this.initBotListener();

    }

    initBotListener() {
        this.socket.on(SOCKET_EVENTS.BOT_MESSAGE, async ({messageData}) => {
            const botId = messageData.recipient._id;

            const savedMessage = await messageService.saveMessage(messageData);
            this.socket.emit(SOCKET_EVENTS.BOT_MESSAGE, savedMessage);

            if (botId === BOT_ID.ECHO_BOT) {

                const botResponse = await echoBot(savedMessage);
                this.socket.emit(SOCKET_EVENTS.BOT_MESSAGE, botResponse);
                return;
            }

            if (botId === BOT_ID.SPAM_BOT) {
                await spamBot(this.socket, savedMessage);
                return;
            }

            if (botId === BOT_ID.REVERSE_BOT) {
                const botResponse = await reverseBot(savedMessage);
               this.socket.emit(SOCKET_EVENTS.BOT_MESSAGE,  botResponse);
                return;
            }

            if (botId === BOT_ID.IGNORE_BOT) {
                return;
            }
        })
    }

}