import React, { CSSProperties } from 'react';

import './Button.scss';
import { LocalImage } from './Image';

interface ButtonProps {
    className?: string;
    style?: CSSProperties;
    imageStyle?: CSSProperties;
    children?: string;
    onClick?: () => void;
    imageSrc?: string;
}

const Button: React.FC<ButtonProps> = ({
    className,
    style,
    onClick,
    children,
    imageSrc,
    imageStyle,
}) => {
    const btnName = `btn ${className || ''}`;
    const alt = `${className}_logo`;

    return (
        <button
            className={btnName}
            style={style}
            onClick={event => {
                event.preventDefault();
                onClick && onClick();
            }}
        >
            {imageSrc && (
                <LocalImage
                    src={imageSrc}
                    alt={alt}
                    style={{
                        marginRight: '8px',
                        width: '20px',
                        height: '20px',
                        ...imageStyle,
                    }}
                />
            )}
            {children}
        </button>
    );
};

export default Button;
