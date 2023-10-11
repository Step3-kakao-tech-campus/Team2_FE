import { ReactNode } from 'react';
interface StatusLayOutProps {
    children: ReactNode;
    isLoading: boolean;
    isError: boolean;
    error?: any;
}
const StatusLayOut = ({
    children,
    isError,
    isLoading,
    error,
}: StatusLayOutProps) => {
    if (isLoading) {
        return <div>loading...</div>;
    }
    if (isError) {
        return <div>{error ? error : 'error...'}</div>;
    }
    return <div>{children}</div>;
};

export default StatusLayOut;
