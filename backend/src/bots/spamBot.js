import {createRandomMessage, getRandomDelay} from "../helpers/helpers.js";
import {messageService} from "../services/messageService.js";
import {SOCKET_EVENTS} from "../constants/socketEvents.js";

export const spamBot =  async (socket, message) => {

    const messageData = {
        sender: message.recipient,
        recipient: message.sender,
        text: createRandomMessage(),
    }

   const botMessage =  await messageService.saveMessage(messageData)


    socket.emit(SOCKET_EVENTS.BOT_MESSAGE, botMessage);

    const delay = getRandomDelay(10000, 120000);
    setTimeout(() => spamBot(socket, message), delay);

}