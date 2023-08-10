import React, {ChangeEvent, InputHTMLAttributes} from 'react';

import './Input.scss';

export enum InputType {
    TEXT = 'text',
    PASSWORD = 'password',
    EMAIL = 'email',
    NUMBER = 'number',
}

export type InputProps = {
    type: InputType;
    value: string;
    placeholder?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;

} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ type, value, placeholder, onChange, ...rest }) => {
    return (
        <input
            className="input"
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            {...rest}
        />
    );
};
