import React, {useEffect, useRef, useState} from 'react';
import {Message} from '../Message';
import './MessageList.scss';
import {MessageDto} from "../../types/messageDto";
import {useSelector} from "react-redux";
import {selectMessageList} from "../../store/message/selectors";
import {socketService} from "../../services/socketService";
import {selectActiveChat} from "../../store/chat/selectors";

export const MessageList = () => {
    const messageList:MessageDto[] = useSelector(selectMessageList);
    const recipientNickname = useSelector(selectActiveChat)?.nickname;
    const [isTyping, setIsTyping] = useState('');


    useEffect(()=>{
        socketService.subscribeToUserTypingListener(()=>{

            setIsTyping(`${recipientNickname} is typing...`)
        })

        socketService.subscribeToUserStopTypingListener(()=>{
            setIsTyping('');
        })
    },[])
    return (
        <div className="message-list">
            <div className="message-list__wrapper">
                {messageList && messageList.map(message => {
                    return <Message key={message._id} messageData={message}/>
                })
                }
                {isTyping}
            </div>
        </div>
    );
};
