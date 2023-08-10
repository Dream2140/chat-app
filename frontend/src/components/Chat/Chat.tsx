import React from 'react';
import {UserCard} from "../UserCard";
import {MessageInput} from "../MessageInput";
import {MessageList} from "../MessageList";
import {ContactList} from "../ContactList";

import './Chat.scss';

export const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__wrapper">
                <div className="chat__content">
                    <UserCard/>
                    <MessageList/>
                    <MessageInput/>
                </div>
                <div className="chat__aside">
                    <ContactList/>
                </div>
            </div>
        </div>
    );
};