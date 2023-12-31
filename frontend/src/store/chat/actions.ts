import {
    ActionWithPayloadHelper,
    ActionsUnion,
    createAction,

} from '../../types/store';

import {ChatActionTypes} from "./actionTypes";
import {UserDto} from "../../types/userDto";


export const changeChatInputValue = (
    payload: string,
): ActionWithPayloadHelper<ChatActionTypes.CHANGE_CHAT_INPUT_VALUE, string> =>
    createAction(ChatActionTypes.CHANGE_CHAT_INPUT_VALUE, payload);

export const changeCurrentChat = (
    payload: UserDto,
): ActionWithPayloadHelper<ChatActionTypes.CHANGE_ACTIVE_CHAT, UserDto> =>
    createAction(ChatActionTypes.CHANGE_ACTIVE_CHAT, payload);

export const setCurrentUser = (
    payload: UserDto,
): ActionWithPayloadHelper<ChatActionTypes.SET_ACTIVE_USER, UserDto> =>
    createAction(ChatActionTypes.SET_ACTIVE_USER, payload);

export const setSearchQuery = (
    payload: string,
): ActionWithPayloadHelper<ChatActionTypes.SET_SEARCH_QUERY, string> =>
    createAction(ChatActionTypes.SET_SEARCH_QUERY, payload);

const chatActions = {
    changeChatInputValue,
    changeCurrentChat,
    setCurrentUser,
    setSearchQuery
};

export type ChatActionType = ActionsUnion<typeof chatActions>;
