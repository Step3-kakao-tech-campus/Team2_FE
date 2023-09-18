import React, { ChangeEvent } from 'react';
import Input from '../atoms/Input';

interface InputFormProps {
    id: string;
    className?: string;
    label: string;
    placeholder: string;
    value: string;
    buttonText: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (value: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ 
    id, 
    className, 
    label, 
    placeholder,
    value,
    buttonText,
    onChange,
    onSubmit }) => {

  
  const handleSubmit = () => {
      onSubmit(value);
  };

  return (
      <div id={id} className={`InputForm ${className}`}>
          <label htmlFor={id}>{label}</label>
          <br />
          <Input type="text" id={id} value={value} onChange={onChange} placeholder={placeholder}/>
          <button onClick={handleSubmit}>{buttonText}</button>
      </div>
  );
}

export default InputForm;

