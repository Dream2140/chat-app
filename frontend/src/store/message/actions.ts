import {ActionsUnion, ActionWithPayloadHelper, createAction, simpleActionCreator,} from '../../types/store';
import {MessageActionTypes} from "./actionTypes";
import {MessageDto} from "../../types/messageDto";


export const addMessage = (
    payload: MessageDto,
): ActionWithPayloadHelper<MessageActionTypes.ADD_MESSAGE, MessageDto> =>
    createAction(MessageActionTypes.ADD_MESSAGE, payload);

export const addMessageList = (
    payload: MessageDto[],
): ActionWithPayloadHelper<MessageActionTypes.ADD_MESSAGE_LIST, MessageDto[]> =>
    createAction(MessageActionTypes.ADD_MESSAGE_LIST, payload);

export const resetMessageList = simpleActionCreator(MessageActionTypes.RESET_MESSAGE_LIST);


const messageActions = {
    addMessage,
    resetMessageList,
    addMessageList,
};

export type MessageActionType = ActionsUnion<typeof messageActions>;
