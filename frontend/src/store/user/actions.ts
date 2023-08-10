import {
    ActionWithPayloadHelper,
    ActionsUnion,
    createAction,

} from '../../types/store';

import {UserActionTypes} from "./actionTypes";
import {UserDto} from "../../types/userDto";




export const addUserList = (
    payload: UserDto[],
): ActionWithPayloadHelper<UserActionTypes.ADD_USER_LIST, UserDto[]> =>
    createAction(UserActionTypes.ADD_USER_LIST, payload);


const userActions = {
    addUserList,
};

export type UserActionType = ActionsUnion<typeof userActions>;
