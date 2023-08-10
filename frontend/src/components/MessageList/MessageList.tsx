import React from 'react';
import {Message} from '../Message';
import './MessageList.scss';
import {MessageDto} from "../../types/messageDto";
import {useSelector} from "react-redux";
import {selectMessageList} from "../../store/message/selectors";

export const MessageList = () => {
    const messageList:MessageDto[] = useSelector(selectMessageList);
    return (
        <div className="message-list">
            <div className="message-list__wrapper">
                {messageList && messageList.map(message => {
                    return <Message key={message._id} messageData={message}/>
                })
                }

            </div>
        </div>
    );
};
