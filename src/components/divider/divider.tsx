import React from 'react';
import cn from 'classnames';

import styles from './divider.module.scss';

interface Props {
    width?: React.CSSProperties['width'];
    className?: string;
    children?: React.ReactNode;
    height?: React.CSSProperties['height'];
}

export const Divider = ({ width, className, height, children }: Props) => {
    return (
        <div style={{ width, height }} className={cn(styles.root, className)}>
            {children}
        </div>
    );
};
