import React from 'react';
import {Avatar} from "../shared/Avatar";

import './ContactItem.scss';
import {MOCK_USER_DESCRIPTION} from "../../constants/mockData";
import {truncateString} from "../../helpers/helpers";

import {UserDto} from "../../types/userDto";
import cn from "classnames";
import {useSelector} from "react-redux";
import {selectActiveChat} from "../../store/chat/selectors";


export const DESCRIPTION_LENGTH = 45;

export type ContactItemProps = {
    onClick: (userData: UserDto) => void;
    contactData: UserDto;
}
export const ContactItem = ({contactData, onClick}: ContactItemProps) => {
    const activeChat = useSelector(selectActiveChat);

    const isActiveItem = activeChat?._id === contactData._id;

    const handleClick = () => {
        onClick(contactData)
    }

    return (
        <div onClick={handleClick} className={cn('contact-item', {
            'contact-item--online': contactData.isOnline,
            'contact-item--active': isActiveItem,
        })} >
            <div className="contact-item__avatar">
                <Avatar avatarLetter={contactData?.avatarLetter} userName={contactData.nickname} avatarImgLink={contactData?.avatarPath}/>
            </div>
            <div className="contact-item__message">
                <h6 className="contact-item__username">{contactData.nickname}</h6>
                <p className="contact-item__message">
                    {truncateString(MOCK_USER_DESCRIPTION, DESCRIPTION_LENGTH)}
                </p>
            </div>
        </div>
    );
};
