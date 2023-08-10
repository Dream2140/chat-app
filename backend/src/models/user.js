import mongoose from 'mongoose'

const {Schema, model} = mongoose;

const userSchema = new Schema({
    nickname: {type: String, required: true},
    avatar: {type: String, required: true},
    isOnline: {type: Boolean, required: true},
});

export default model('User', userSchema);

