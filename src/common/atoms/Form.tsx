import React, { CSSProperties, ReactNode } from 'react';

interface FormProps {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}

interface ItemProps {
    className?: string;
    children: ReactNode;
}

export const Form: React.FC<FormProps> = ({ className, style, children }) => {
    const formName = `form ${className || ''}`;
    return (
        <form className={formName} style={style}>
            {children}
        </form>
    );
};

export const FormItem = ({ className, children }: ItemProps) => {
    const itemName = `form_item ${className || ''}`;

    return <div className={itemName}>{children}</div>;
};
