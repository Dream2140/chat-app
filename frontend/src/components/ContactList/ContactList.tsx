import React, {ChangeEvent, memo, useCallback, useState} from 'react';
import {Tabs} from "../shared/Tabs";
import {CHAT_TABS} from "../../constants/chatTabs";
import {ContactItem} from "../ContactItem";
import {Input} from "../shared/Input";
import {InputType} from "../shared/Input/Input";

import './ContactList.scss';
import {SEARCH_CONTACTS_PLACEHOLDER} from "../../constants/placeholders";
import {useDispatch, useSelector} from "react-redux";
import {selectOnlineUsers, selectUserList} from "../../store/user/selectors";
import {changeCurrentChat} from "../../store/chat/actions";
import {UserDto} from "../../types/userDto";
import {socketService} from "../../services/socketService";
import {selectActiveChat, selectActiveUser} from "../../store/chat/selectors";
import {changeCurrentChatWithThunk} from "../../store/chat/thunks";

export const ContactList = memo(() => {
    const dispatch = useDispatch();

    const onlineUsers = useSelector(selectOnlineUsers);
    const allUsers = useSelector(selectUserList);
    const currentChat = useSelector(selectActiveChat);
    const currentUser = useSelector(selectActiveUser);

    const [search, setSearch] = useState('');

    const setSearchInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }, []);

    const clickHandler = useCallback((userId: UserDto) => {

        // @ts-ignore
        dispatch(changeCurrentChatWithThunk(userId));
    }, [currentChat, currentUser]);

    const tabsData = useCallback(() => {
        return [
            {
                id: CHAT_TABS.ONLINE_CHATS.id,
                title: CHAT_TABS.ONLINE_CHATS.title,
                component: (
                    <>
                        {onlineUsers.map(userInfo => <ContactItem contactData={userInfo} onClick={clickHandler}
                                                                  key={userInfo._id}/>)}
                    </>
                ),
            },
            {
                id: CHAT_TABS.ALL_CHATS.id,
                title: CHAT_TABS.ALL_CHATS.title,
                component: (

                    <>
                        {allUsers.map(userInfo => <ContactItem contactData={userInfo} onClick={clickHandler}
                                                               key={userInfo._id}/>)}
                    </>

                ),
            },
        ];
    }, [onlineUsers, allUsers]);

    return (
        <div className="contact-list">
            <div className="contact-list__tabs">
                <Tabs tabs={tabsData()}/>
            </div>
            <div className="contact-list__bottom">
                <Input type={InputType.TEXT} value={search} onChange={setSearchInput}
                       placeholder={SEARCH_CONTACTS_PLACEHOLDER}/>
            </div>
        </div>
    );
});
