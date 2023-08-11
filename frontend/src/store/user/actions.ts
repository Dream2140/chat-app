import {
    ActionWithPayloadHelper,
    ActionsUnion,
    createAction, simpleActionCreator,

} from '../../types/store';

import {UserActionTypes} from "./actionTypes";
import {UserDto} from "../../types/userDto";




export const addUserList = (
    payload: UserDto[],
): ActionWithPayloadHelper<UserActionTypes.ADD_USER_LIST, UserDto[]> =>
    createAction(UserActionTypes.ADD_USER_LIST, payload);

export const resetUserList =  simpleActionCreator(UserActionTypes.RESET_USER_LIST);


const userActions = {
    addUserList,
    resetUserList
};

export type UserActionType = ActionsUnion<typeof userActions>;
