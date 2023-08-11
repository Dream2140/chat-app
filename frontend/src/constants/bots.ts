import {UserDto} from "../types/userDto";

export const botsData: UserDto[] = [
    {
        _id: 'echo-bot',
        nickname: 'Echo bot',
        avatarPath: '/images/echo-bot.png',
        isOnline: true,
    },
    {
        _id: 'reverse-bot',
        nickname: 'Reverse bot',
        avatarPath: '/images/reverse-bot.png',
        isOnline: true,
    },
    {
        _id: 'spam-bot',
        nickname: 'Spam bot',
        avatarPath: '/images/spam-bot.png',
        isOnline: true,
    },
    {
        _id: 'ignore-bot',
        nickname: 'Ignore bot',
        avatarPath: '/images/ignore-bot.png',
        isOnline: true,
    }
];