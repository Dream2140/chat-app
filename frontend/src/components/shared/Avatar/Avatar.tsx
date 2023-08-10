import React from 'react';

import './Avatar.scss'

export type avatarProps = {
    userName: string;
    avatarLetter?: string;
    avatarImgLink?: string;
}
export const Avatar = ({userName, avatarLetter, avatarImgLink}: avatarProps) => {

    const renderAvatar = () => {
        if (avatarImgLink) {
            return <img src={avatarImgLink} alt={userName} className="avatar__img"/>;
        } else {
            return <div className="avatar__letter" aria-label={userName}>{avatarLetter}</div>;
        }
    };

    return (
        <div className="avatar">
            <div className="avatar__wrapper">
                {renderAvatar()}
            </div>
        </div>
    );
};
