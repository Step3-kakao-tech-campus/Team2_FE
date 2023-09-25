import { ReactNode } from 'react';
import './Container.scss';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

interface DescriptionContainerProps {
    width?: string;
    height?: string;
    title: string;
    description: string;
    isCenter?: boolean;
}

export const MainContainer = ({ className, children }: ContainerProps) => {
    const containerName = className
        ? `main_container ${className}`
        : 'main_container';

    return <div className={containerName}>{children}</div>;
};

export const Container = ({ className, children }: ContainerProps) => {
    const containerName = className ? `container ${className}` : 'container';

    return <div className={containerName}>{children}</div>;
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
