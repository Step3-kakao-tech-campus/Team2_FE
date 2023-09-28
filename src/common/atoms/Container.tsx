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
    children?: ReactNode;
    className?: string;
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
    className,
    children,
}: DescriptionContainerProps) => {
    return (
        <div
            className={`description ${isCenter && 'center'} ${className ?? ''}`}
            style={{ width, height }}
        >
            <div className="head">
                <h2>{title}</h2>
                <div>{children}</div>
            </div>
            <p>{description}</p>
        </div>
    );
};
