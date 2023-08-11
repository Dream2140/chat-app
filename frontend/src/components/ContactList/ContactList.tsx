import React, {ChangeEvent, memo, useCallback} from 'react';
import {Tabs} from "../shared/Tabs";
import {CHAT_TABS} from "../../constants/chatTabs";
import {ContactItem} from "../ContactItem";
import {Input} from "../shared/Input";
import {InputType} from "../shared/Input/Input";

import './ContactList.scss';
import {SEARCH_CONTACTS_PLACEHOLDER} from "../../constants/placeholders";
import {useDispatch, useSelector} from "react-redux";
import {selectOnlineUsers, selectUserList} from "../../store/user/selectors";
import {setSearchQuery} from "../../store/chat/actions";
import {UserDto} from "../../types/userDto";
import {getCurrentUserId, getSearchQuery, selectActiveChat, selectActiveUser} from "../../store/chat/selectors";
import {changeCurrentChatWithThunk} from "../../store/chat/thunks";

export const ContactList = memo(() => {
    const dispatch = useDispatch();

    const onlineUsers = useSelector(selectOnlineUsers);
    const allUsers = useSelector(selectUserList);
    const currentUserid = useSelector(getCurrentUserId);
    const currentChat = useSelector(selectActiveChat);
    const currentUser = useSelector(selectActiveUser);
    const searchQuery = useSelector(getSearchQuery);

    const filterList = (list: UserDto[]) => {
        return list.filter((item) => {
            const lowercaseSearchQuery = searchQuery.toLowerCase();
            const lowercaseNickname = item.nickname.toLowerCase();
            return item._id !== currentUserid  &&
                lowercaseNickname.includes(lowercaseSearchQuery)
        });
    };

    const filteredOnlineUsersList = filterList(onlineUsers);
    const filteredAllUsersList = filterList(allUsers);


    const setSearchInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(event.target.value));
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
                        {filteredOnlineUsersList.map(userInfo => <ContactItem contactData={userInfo}
                                                                              onClick={clickHandler}
                                                                              key={userInfo._id}/>)}
                    </>
                ),
            },
            {
                id: CHAT_TABS.ALL_CHATS.id,
                title: CHAT_TABS.ALL_CHATS.title,
                component: (

                    <>
                        {filteredAllUsersList.map(userInfo => <ContactItem contactData={userInfo} onClick={clickHandler}
                                                                           key={userInfo._id}/>)}
                    </>

                ),
            },
        ];
    }, [onlineUsers, allUsers, searchQuery]);

    return (
        <div className="contact-list">
            <div className="contact-list__tabs">
                <Tabs tabs={tabsData()}/>
            </div>
            <div className="contact-list__bottom">
                <Input type={InputType.TEXT} value={searchQuery} onChange={setSearchInput}
                       placeholder={SEARCH_CONTACTS_PLACEHOLDER}/>
            </div>
        </div>
    );
});
