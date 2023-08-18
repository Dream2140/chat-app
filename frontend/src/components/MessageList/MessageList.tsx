import React, {useEffect, useRef, useState} from 'react';
import {Message} from '../Message';
import './MessageList.scss';
import {MessageDto} from "../../types/messageDto";
import {useDispatch, useSelector} from "react-redux";
import {selectMessageList} from "../../store/message/selectors";
import {socketService} from "../../services/socketService";
import {getCurrentChatId, selectActiveChat} from "../../store/chat/selectors";
import {addMessage} from "../../store/message/actions";


export const MessageList = () => {
    const messageList: MessageDto[] = useSelector(selectMessageList);
    const recipientData = useSelector(selectActiveChat);
    const currentChatId = useSelector(getCurrentChatId);

    const dispatch = useDispatch();

    const [isTyping, setIsTyping] = useState('');

    const messageListRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, [messageList]);

    useEffect(() => {

        socketService.subscribeToUserTypingListener((recipientId) => {
            if (recipientId === currentChatId) {
                setIsTyping(`${recipientData?.nickname} is typing...`)
            }
        })

        socketService.subscribeBotMessageListener((message: MessageDto) => {
            dispatch(addMessage(message));
        })

        socketService.subscribeToUserStopTypingListener(() => {
            setIsTyping('');
        })
    }, []);


    return (
        <div className="message-list">
            <div className="message-list__wrapper" ref={messageListRef}>
                {messageList && messageList.map(message => {
                    return <Message key={message._id} messageData={message}/>
                })
                }
                <span className="message-list__writing"> {isTyping}</span>
            </div>
        </div>
    );
};
