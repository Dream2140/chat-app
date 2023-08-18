import {AppThunk} from "../../types/store";

import {MessageDto} from "../../types/messageDto";
import {addMessage} from "./actions";
import {getCurrentChatId, getCurrentUserId} from "../chat/selectors";

export const saveMessageThunk =
    (message: MessageDto): AppThunk =>
        async (dispatch, getState) => {
            const currentChatId = getCurrentChatId(getState());
            const currentUserId = getCurrentUserId(getState());
            const senderId = message.sender._id;

            if (currentUserId === senderId || currentChatId === senderId) {
                dispatch(addMessage(message));
            }
        };