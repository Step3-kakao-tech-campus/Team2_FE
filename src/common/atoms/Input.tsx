import React, { ChangeEvent } from 'react';

interface InputProps {
  type: string;
  id?: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, id, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
