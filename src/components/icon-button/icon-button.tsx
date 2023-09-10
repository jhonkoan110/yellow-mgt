import React from 'react';
import cn from 'classnames';

import { Button } from 'components/button';

import styles from './icon-button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export const IconButton = ({ children, className, ...rest }: Props) => {
    return (
        <Button className={cn(styles.root, className)} {...rest}>
            {children}
        </Button>
    );
};
