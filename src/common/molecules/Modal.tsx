import React, { Children } from 'react';
import Button from '../atoms/Button';

interface ModalProps {
  style?: React.CSSProperties; 
  text: string;
  ButtonText: string;
  ButtonStyle: {
    width: string | number;
    height: string | number;
  };
  handleClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ style, text, ButtonStyle, ButtonText, handleClick}) => {

    return (
        <div style={{...style}}>
            <p>{text}</p>
            <Button className={`Modal Button`} style={ButtonStyle} onClick={handleClick}>{ButtonText}</Button>
        </div>
    )}

export default Modal;