import React, { ReactNode } from 'react';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

interface ContentProps {
    className?: string;
    children: ReactNode;
}
interface TitleProps {
    className?: string;
    children: ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
    const containerName = `container ${className || ''}`;

    return <div className={containerName}>{children}</div>;
};

export const Content = ({ className, children }: ContentProps) => {
    const contentName = `content ${className || ''}`;

    return <div className={contentName}>{children}</div>;
};

export const Title = ({ className, children }: TitleProps) => {
    const titleName = `title ${className || ''}`;

    return <div className={titleName}>{children}</div>;
};
