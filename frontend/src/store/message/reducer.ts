import {MessageDto} from "../../types/messageDto";
import {MessageActionTypes} from "./actionTypes";
import {MessageActionType} from "./actions";

export interface MessageList {
    messageList: MessageDto[];
    errorMessage: string;
}

export const INITIAL_STATE: MessageList = {
    messageList: [],
    errorMessage: '',
};

export const messageReducer = (state: MessageList = INITIAL_STATE, action: MessageActionType): MessageList => {
    switch (action.type) {
        case MessageActionTypes.ADD_MESSAGE:
            return {
                ...state,
                messageList: [...state.messageList, action.payload],
            };
        case MessageActionTypes.RESET_MESSAGE_LIST:
            return {
                ...INITIAL_STATE
            };
        case MessageActionTypes.ADD_MESSAGE_LIST:
            return {
                ...state,
                messageList: [...action.payload],
            };
        default:
            return state;
    }
};