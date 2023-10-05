import { ReactNode } from 'react';
import './WrapContainer.scss';
interface ComponentProps {
    children: ReactNode;
}
const WrapContainer = ({ children }: ComponentProps) => {
    return <div className="wrap_container">{children}</div>;
};

export default WrapContainer;
