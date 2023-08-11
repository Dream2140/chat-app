import {UserActionTypes} from "./actionTypes";
import {UserActionType} from "./actions";
import {UserDto} from "../../types/userDto";


export interface UserList {
  userList: UserDto[];
  errorMessage: string;
}

export const INITIAL_STATE: UserList = {
  userList: [],
  errorMessage: '',
};

export const userReducer = (state: UserList = INITIAL_STATE, action: UserActionType): UserList => {
  switch (action.type) {
    case UserActionTypes.ADD_USER_LIST:
      return {
        ...state,
        userList: [...state.userList, ...action.payload],
      };

    case UserActionTypes.RESET_USER_LIST:
      return {
        ...INITIAL_STATE
      };

    default:
      return state;
  }
};