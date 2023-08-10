import React from 'react';
import "./UserCard.scss";
import {Avatar} from "../shared/Avatar";
import {useSelector} from "react-redux";
import {selectActiveChat} from "../../store/chat/selectors";

export const UserCard = () => {
    const userData = useSelector(selectActiveChat);

    return (
        <div className="user-card">
            <div className="user-card__avatar">
                <Avatar userName={userData?.nickname as string} avatarLetter={userData?.avatar}/>
            </div>
            <div className="user-card__info">
                <h3 className="user-card__title">{userData?.nickname}</h3>
                <p className="user-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    );
};
