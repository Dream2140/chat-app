import {UserDto} from "../../types/userDto";
import {AppThunk} from "../../types/store";
import {changeCurrentChat} from "./actions";

import {selectActiveChat, selectActiveUser} from "./selectors";
import {socketService} from "../../services/socketService";

export const changeCurrentChatWithThunk =
    (userData: UserDto): AppThunk =>
        async (dispatch, getState) => {
            dispatch(changeCurrentChat(userData));

            const currentChatId = selectActiveChat(getState())?._id || '';
            const currentUserId = selectActiveUser(getState())?._id || '';

            socketService.emitGetMessageList(currentChatId, currentUserId);
        };
