import React, {ChangeEvent, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Button} from "../shared/Button";
import {BUTTON_TYPE} from "../shared/Button/Button";
import {Input} from "../shared/Input";
import {InputType} from "../shared/Input/Input";

import './MessageInput.scss';
import {CHAT_INPUT_PLACEHOLDER} from "../../constants/placeholders";
import {useDispatch, useSelector} from "react-redux";

import {USER_LOCALSTORAGE_KEY} from "../../constants/userConstants";
import {socketService} from "../../services/socketService";
import {changeChatInputValue} from "../../store/chat/actions";
import {selectActiveChat, selectActiveUser, selectChatInputValue} from "../../store/chat/selectors";


export const MessageInput = () => {

    const dispatch = useDispatch();

    const messageValue = useSelector(selectChatInputValue);
    const currentChat = useSelector(selectActiveChat);
    const currentUser = useSelector(selectActiveUser);

    const typingTimeoutRef = useRef<number | null>(null);

    const handleMessageInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = window.setTimeout(() => {
            socketService.emmitUserStopTyping();
        }, 5000);

        socketService.emmitUserIsTyping(currentUser?._id || '')
        dispatch(changeChatInputValue(event.target.value));
    }, []);

    const handleSendMessage = ()=>{
        if ( messageValue.trim() !== "") {
            const messageData = {
                recipient: currentChat,
                text: messageValue,
                sender: currentUser
            };

             // @ts-ignore
            socketService.sendMessage(messageData);
            dispatch(changeChatInputValue(""));
        }
    };
    return (
        <div className="message-input">

            <Input type={InputType.TEXT} value={messageValue} onChange={handleMessageInput} autoComplete="off" placeholder={CHAT_INPUT_PLACEHOLDER}/>
            <Button onClick={handleSendMessage} type={BUTTON_TYPE.SUBMIT}>Send message </Button>
        </div>
    );
};