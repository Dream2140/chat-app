import {createSelector} from 'reselect';
import {RootState} from "../rootReducer";
import {UserList} from "./reducer";


export const getUserStoreData = (state: RootState): UserList => state.user;

export const selectUserList = createSelector(
    getUserStoreData,
    userState => userState.userList,
);

export const selectOnlineUsers = createSelector(
    getUserStoreData,
    userState => userState.userList.filter(item => item.isOnline),
);