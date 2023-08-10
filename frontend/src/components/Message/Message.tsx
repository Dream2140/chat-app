import React from 'react';
import './Message.scss';
import cn from "classnames";
import {MessageDto} from "../../types/messageDto";
import {formatTime} from "../../helpers/helpers";
import {useSelector} from "react-redux";
import {selectActiveUser} from "../../store/chat/selectors";


export const Message: React.FC<{ messageData: MessageDto }> = ({ messageData })=> {
    const currentUser = useSelector(selectActiveUser);

    const messageType = messageData.sender._id === currentUser?._id ? 'sender': 'recipient';

    return (
        <div className={cn('message', `message--${messageType}`)}>
            <div className="message__wrapper">
                <div className="message__header">
                    <div className="message__username">{messageData.sender.nickname}</div>
                    <div className="message__time">
                        {formatTime(messageData.timestamp as string)}
                    </div>
                </div>
                <div className="message__body">
                    <div className="message__text">
                        {messageData.text}
                    </div>
                </div>
            </div>
        </div>
    );
};
