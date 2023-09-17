import React, { ReactNode } from 'react';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
    const containerName = `container ${className || ''}`;

    return <div className={containerName}>{children}</div>;
};

export default Container;
