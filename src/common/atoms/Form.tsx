import React, { CSSProperties, ReactNode } from 'react';

import './Form.scss';

interface FormProps {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}

interface ItemProps {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}

export const Form: React.FC<FormProps> = ({ className, style, children }) => {
    return (
        <form className={`form_Name ${className}` || ''} style={style}>
            {children}
        </form>
    );
};

export const FormItem = ({ className, style, children }: ItemProps) => {
    return (
        <div className={`form_item ${className}` || ''} style={{ ...style }}>
            {children}
        </div>
    );
};
