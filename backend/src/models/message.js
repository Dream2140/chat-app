import mongoose from 'mongoose'

const {Schema, model} = mongoose;

const messageSchema = new Schema(
    {
        sender: {type: String, ref: 'User', required: true},
        recipient: {type: String, ref: 'User', required: true},
        text: {type: String, required: true},
        timestamp: {type: Date, default: Date.now},
    }
)

export default model('Message', messageSchema);
