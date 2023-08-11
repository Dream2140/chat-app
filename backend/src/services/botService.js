import {BOT_DATA} from "../constants/bots.js";
import User from "../models/user.js";

export const createDefaultBots = async () => {
    for (const bot of BOT_DATA) {
        const existingUser = await User.findById(bot._id);
        if (!existingUser) {
            const newUser = new User(bot);
            await newUser.save();
        }
    }
}