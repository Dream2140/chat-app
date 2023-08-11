import {messageService} from "../services/messageService.js";

export const echoBot = async (message) => {
    const messageData = {
        sender: message.recipient,
        recipient: message.sender,
        text: message.text,
    }

    return await messageService.saveMessage(messageData)
}
