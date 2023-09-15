import React, { ChangeEvent } from 'react';
import Input from '../atoms/Input';

interface InputLabelProps {
    id: string;
    className?: string;
    label: string;
    placeholder: string;
    value: string;
    buttonText: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputLabel: React.FC<InputLabelProps> = ({ 
    id, 
    className, 
    label, 
    placeholder,
    value,
    onChange,
     }) => {

  return (
      <div id={id} className={`InputLabel ${className}`}>
          <label htmlFor={id}>{label}</label>
          <Input type="text" id={id} value={value} onChange={onChange} placeholder={placeholder}/>
      </div>
  );
}

export default InputLabel;

