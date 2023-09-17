import React, { ReactNode } from 'react';

interface ContainerContentProps {
    className?: string;
    children: ReactNode;
}

const ContainerContent = ({ className, children }: ContainerContentProps) => {
    const containerName = `content ${className || ''}`;

    return <div className={containerName}>{children}</div>;
};

export default ContainerContent;
