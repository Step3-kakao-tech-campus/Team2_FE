import React, { ChangeEvent } from 'react';

interface InputProps {
    type: string;
    id?: string;
    className?: string;
    value?: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({
    type,
    id,
    className,
    value,
    onChange,
    placeholder,
}) => {
    const inputName = `input ${className || ''}`;

    return (
        <input
            type={type}
            id={id}
            className={inputName}
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;
