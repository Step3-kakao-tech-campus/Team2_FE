import './container.scss';
import React from 'react';
interface DescriptionContainerProps {
    width?: string;
    height?: string;
    title: string;
    description: string;
    isCenter?: boolean;
}

export const IntroContainer = ({ children }: { children: React.ReactNode }) => {
    return <div className="container main">{children}</div>;
};

export const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="container">{children}</div>;
};

export const DescriptionContainer = ({
    width,
    height,
    title,
    description,
    isCenter = false,
}: DescriptionContainerProps) => {
    return (
        <div
            className={`description ${isCenter && 'center'}`}
            style={{ width, height }}
        >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};
