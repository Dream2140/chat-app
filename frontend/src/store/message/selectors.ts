import { createSelector } from 'reselect';
import {RootState} from "../rootReducer";
import {MessageList} from "./reducer";

export const getMessageStoreData = (state: RootState): MessageList => state.message;

export const selectMessageList = createSelector(
    getMessageStoreData,
  messageState => messageState.messageList,
);
