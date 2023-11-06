import React, { CSSProperties } from 'react';
interface ImageProps {
    src: string;
    width?: string;
    height?: string;
    alt?: string;
    style?: CSSProperties;
    className?: string;
}
export const LocalImage = ({
    width = '100%',
    height,
    src,
    alt,
    style = {},
    className = '',
}: ImageProps) => {
    return (
        <div style={{ width, height, ...style }} className={className}>
            <img src={process.env.PUBLIC_URL + '/assets/' + src} alt={alt} />
        </div>
    );
};

export const ServerImage = ({
    width = '100%',
    height,
    src,
    alt,
    style = {},
    className = '',
}: ImageProps) => {
    return (
        <div style={{ width, height, ...style }} className={className}>
            <img
                loading="lazy"
                src={process.env.REACT_APP_API_URL + src}
                alt={alt}
            />
        </div>
    );
};
