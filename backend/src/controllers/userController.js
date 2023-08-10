import User from "../models/user.js";
import {generateRandomName, getRandomLetter} from "../helpers/helpers.js";


export class UserController {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;

        this.initUserListener();

        this.initUserListListener();

        this.connectUserListener();

        this.initUserTypingListener();

        this.initUserStopTypingListener();
    }

    initUserListener() {
        this.socket.on('user:init', async () => {
            const newUserData = await this.addNewUser();
            this.socket.userId = newUserData._id;
            this.io.to(this.socket.id).emit('user:new_user_inited', newUserData);
        })
    }

    async addNewUser() {
        const newUser = {nickname: generateRandomName(), avatar: getRandomLetter(), isOnline: true}

        return User.create(newUser);
    }

    async getUserList() {
        return User.find();
    }

    async initUserListListener() {
        const users = await this.getUserList()

        this.socket.emit('user:user_list', users);
    }

    async connectUserListener() {

        this.socket.on('user:change_online_status', async ({_id, isOnline}) => {
            this.socket.userId = _id
            await User.findOneAndUpdate({_id}, {isOnline});

            await this.initUserListListener();

        })
    }

    initUserTypingListener() {
        this.socket.on('user:set_user_typing', async () => {
            this.socket.broadcast.emit('user:set_user_typing');
        })
    }

    initUserStopTypingListener() {
        this.socket.on('user:user_stop_typing', async (user) => {
            this.socket.broadcast.emit('user:user_stop_typing', user);
        })
    }
}