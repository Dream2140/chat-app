import mongoose from 'mongoose'
import {v4} from "uuid";
const {Schema, model} = mongoose;

const userSchema = new Schema({
    _id: {  type: String, default: v4()},
    nickname: {type: String, required: true},
    avatarLetter: {type: String, required: false},
    avatarPath: {type: String, required: false},
    isOnline: {type: Boolean, required: true},
});

export default model('User', userSchema);

