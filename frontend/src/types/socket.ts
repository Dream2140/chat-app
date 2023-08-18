import {MessageDto} from "./messageDto";
import {UserDto} from "./userDto";

export interface ServerToClientEvents {
    message: (data: MessageDto) => void;
    messageList: (data: MessageDto[]) => void;
    isTyping: (name: string) => void;
    userList: (data: UserDto[]) => void;
    newUser: (data: UserDto) => void;
    userTyping: (id: string) => void;
    seenMessage: (id: string) => void;
    botMessage: (data: MessageDto) => void;
}