import React, { ReactNode } from 'react';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

const ContainerTitle = ({ className, children }: ContainerProps) => {
    const containerName = `title ${className || ''}`;

    return <div className={containerName}>{children}</div>;
};

export default ContainerTitle;
