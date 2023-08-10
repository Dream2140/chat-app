import { combineReducers } from 'redux';
import {messageReducer} from "./message/reducer";
import {userReducer} from "./user/reducer";
import {chatReducer} from "./chat/reducer";


export const rootReducer = combineReducers({
  message: messageReducer,
  user: userReducer,
  chat: chatReducer
});

export type RootState = ReturnType<typeof rootReducer>;
