import React from 'react';

interface ButtonProps {
    className: string;
    style: {
      width: string | number;
      height: string | number;
      borderRadius?: string | number;
    };
    children: string;
    onClick: () => void; 
}

const RadiusButton: React.FC<ButtonProps> = ({ className, style, onClick, children}) => {
  return (
    <button 
      className={className} 
      style={{...style,  borderRadius: style.borderRadius || '50px'}}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default RadiusButton;
