import {messageService} from "../services/messageService.js";

export const reverseBot = async (message) => {
    const messageData = {
        sender: message.recipient,
        recipient: message.sender,
        text: message.text.split('').reverse().join('')
    }

    return await messageService.saveMessage(messageData);
}