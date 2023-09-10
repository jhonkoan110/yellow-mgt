import React from 'react';
import cn from 'classnames';

import styles from './divider.module.scss';

interface Props {
    width?: React.CSSProperties['width'];
    className?: string;
}

export const Divider = ({ width, className }: Props) => {
    return <div style={{ width }} className={cn(styles.root, className)} />;
};
