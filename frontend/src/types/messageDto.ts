import {UserDto} from "./userDto";

export interface MessageDto {
    sender: UserDto;
    recipient: UserDto;
    text: string;
    _id?: string;
    timestamp?: string
}