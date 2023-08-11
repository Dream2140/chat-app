import {generateRandomName, getRandomLetter} from "../helpers/helpers.js";
import User from "../models/user.js";
import {BOT_DATA} from "../constants/bots.js";

class UserService {
    getUserList = async () => {
        const botIds = BOT_DATA.map(bot => bot._id);

        const botUsersId = await User.find({ _id: { $in: botIds } });

        const sortedUsers = await User.find({ _id: { $nin: botIds } }).sort({ nickname: 1 });

        return [...botUsersId, ...sortedUsers];
    }
    saveUser = async () => {
        const newUser = {nickname: generateRandomName(), avatarLetter: getRandomLetter(), isOnline: true}

        return User.create(newUser);
    }

    setOnlineStatus = async (_id, isOnline) => {
        await User.findOneAndUpdate({_id}, {isOnline});
    }
}

export const userService = new UserService()