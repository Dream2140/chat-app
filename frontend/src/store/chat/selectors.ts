import { createSelector } from 'reselect';
import {RootState} from "../rootReducer";
import {ChatState} from "./reducer";

export const getMessageStoreData = (state: RootState): ChatState => state.chat;

export const selectChatInputValue = createSelector(
    getMessageStoreData,
    chatState => chatState.inputValue,
);

export const selectActiveChat = createSelector(
    getMessageStoreData,
    chatState => chatState.activeChat,
);

export const selectActiveUser = createSelector(
    getMessageStoreData,
    chatState => chatState.userData,
);

export const getCurrentUserId = createSelector(
    getMessageStoreData,
    chatState => chatState.userData?._id,
);

export const getSearchQuery = createSelector(
    getMessageStoreData,
    chatState => chatState.searchQuery,
);