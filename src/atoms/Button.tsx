import React from 'react';

interface ButtonProps {
  	className: string;
  	style: {
    	width: string | number;
    	height: string | number;
  	};
  	children: string;
  	onClick: () => void; 
}

const Button: React.FC<ButtonProps> = ({ className, style, onClick, children }) => {
  	return <button className={className} style={{...style}}
  	onClick={(event) => {
    	event.preventDefault();
    	onClick();
  	}}>{children}</button>;
}

export default Button;