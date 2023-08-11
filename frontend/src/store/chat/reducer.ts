import {ChatActionTypes} from "./actionTypes";
import {ChatActionType} from "./actions";
import {UserDto} from "../../types/userDto";


export interface ChatState {
    inputValue: string;
    activeChat: UserDto | null;
    userData: UserDto | null;
    searchQuery: string;
}

export const INITIAL_STATE: ChatState = {
    inputValue: '',
    activeChat: {
        _id: 'echo-bot',
        nickname: 'Echo bot',
        avatarPath: '/images/echo-bot.png',
        isOnline: true,
    },
    userData: null,
    searchQuery: '',
};

export const chatReducer = (state: ChatState = INITIAL_STATE, action: ChatActionType): ChatState => {
    switch (action.type) {
        case ChatActionTypes.CHANGE_CHAT_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload,
            };
        case ChatActionTypes.CHANGE_ACTIVE_CHAT:
            return {
                ...state,
                activeChat: action.payload,
            };
        case ChatActionTypes.SET_ACTIVE_USER:
            return {
                ...state,
                userData: action.payload,
            };

        case ChatActionTypes.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };
        default:
            return state;
    }
};