import {UserDto} from "../../types/userDto";
import {AppThunk} from "../../types/store";
import {changeCurrentChat} from "./actions";

import {selectActiveChat, selectActiveUser} from "./selectors";
import {socketService} from "../../services/socketService";





export const changeCurrentChatWithThunk =
    (userId: UserDto): AppThunk =>
        async (dispatch, getState) => {
            dispatch(changeCurrentChat(userId));

            const currentChat = selectActiveChat(getState());
            const currentUser = selectActiveUser(getState());

            // @ts-ignore
            socketService.requestGetMessageList(currentChat._id, currentUser._id);
        };
