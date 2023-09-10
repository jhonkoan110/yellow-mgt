import React from 'react';
import cn from 'classnames';

import styles from './button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export const Button = ({ children, className, ...rest }: Props) => {
    return (
        <button className={cn(styles.root, className)} {...rest}>
            {children}
        </button>
    );
};
