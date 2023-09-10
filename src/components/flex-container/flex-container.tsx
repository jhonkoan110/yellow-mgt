import React from 'react';
import cn from 'classnames';

import styles from './flex-container.module.scss';

interface Props {
    alignItems: React.CSSProperties['alignItems'];
    justifyContent: React.CSSProperties['justifyContent'];
    flexDirection: React.CSSProperties['flexDirection'];
    wrap: React.CSSProperties['flexWrap'];
    gap: React.CSSProperties['gap'];
    className: string;
    children: React.ReactNode;
}

export const FlexContainer = ({
    className,
    alignItems,
    justifyContent,
    flexDirection,
    gap,
    children,
    wrap,
}: Partial<Props>) => {
    return (
        <div
            className={cn(styles.root, className)}
            style={{ flexWrap: wrap, gap, alignItems, justifyContent, flexDirection }}>
            {children}
        </div>
    );
};
