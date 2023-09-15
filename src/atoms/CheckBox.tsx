import React, { ChangeEvent } from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  style?: React.CSSProperties; // style prop 추가
  className?: string; // className prop 추가
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, style, className }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <input 
      type="checkbox" 
      checked={checked} 
      onChange={handleChange}
      style={style} // style 적용
      className={className} // className 적용
    />
  );
}

export default Checkbox;
