import Message from "../models/message.js";
import mongoose from "mongoose";

const messages = {}

export class MessageController {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
        this.roomId = socket.roomId


        this.getMessageListListener();

        this.addMessageListener();

    }

    postSavedMessage = (message) => {
        this.io.emit('message:get-message', message)
    }

    getMessageListListener() {
        this.socket.on('message:load_message_list_request', async ({recipientId, senderId}) => {
            const correspondence = await Message.find({
                $or: [
                    {sender: {_id: senderId}, recipient: {_id: recipientId}},
                    {sender: {_id: recipientId}, recipient: {_id: senderId}}
                ]
            }).populate('sender recipient').sort({timestamp: 1});

         const qwe= await  Message.find({
                $or: [
                    { sender: recipientId, recipient: senderId },
                    { sender: senderId, recipient: recipientId }
                ]
            })
                .populate('sender')
                .populate('recipient')
                .sort('timestamp')
                .exec();


           const asd= await Message.find({
               $or: [
                   { sender: recipientId, recipient: senderId },
                   { sender: senderId, recipient: recipientId }
               ]
           }).populate('sender recipient').sort({ timestamp: 1 });

            console.log(recipientId)
            console.log(senderId)

            this.socket.emit('message:load_message_list_response', asd);


        })
    }

    addMessageListener() {
        this.socket.on('message:add', async (messageData) => {

            const newMessage = new Message(messageData);
            await newMessage.save();

            const populatedMessage = await Message.findById(newMessage._id)
                .populate('sender')
                .populate('recipient');
            this.postSavedMessage(populatedMessage);
            this.io.to(this.socket.handshake.auth.userId).to(messageData.recipient).emit('message:new_message', newMessage);

        })
    }

}