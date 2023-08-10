import React from 'react';
import {Avatar} from "../shared/Avatar";

import './ContactItem.scss';
import {MOCK_USER_DESCRIPTION} from "../../constants/mockData";
import {truncateString} from "../../helpers/helpers";

import {UserDto} from "../../types/userDto";


export const DESCRIPTION_LENGTH = 45;

export type ContactItemProps = {
    onClick: (userData: UserDto) => void;
    contactData: UserDto;
}
export const ContactItem = ({contactData, onClick}: ContactItemProps) => {
    const handleClick = () => {
        onClick(contactData)
    }
    return (
        <div className="contact-item" onClick={handleClick}>
            <div className="contact-item__avatar">
                <Avatar avatarLetter={contactData.avatar} userName={contactData.nickname}/>
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
