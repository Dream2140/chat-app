import Message from "../models/message.js";

class MessageService {
    getMessageList = async (recipientId, senderId) => {
        return Message.find({
            $or: [
                {sender: recipientId, recipient: senderId},
                {sender: senderId, recipient: recipientId}
            ]
        }).populate('sender recipient').sort({timestamp: 1});
    }
    saveMessage = async (messageData) => {
        const newMessage = new Message(messageData);
        await newMessage.save();

        return Message.findById(newMessage._id)
            .populate('sender')
            .populate('recipient');
    }
}

export const messageService = new MessageService()