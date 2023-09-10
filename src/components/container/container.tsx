import React from 'react';
import cn from 'classnames';

import styles from './container.module.scss';

interface Props {
    children: React.ReactNode;
    className?: string;
    mt?: React.CSSProperties['marginTop'];
}

export const Container = ({ children, mt, className }: Props) => {
    return (
        <div style={{ marginTop: mt }} className={cn(styles.root, className)}>
            {children}
        </div>
    );
};
