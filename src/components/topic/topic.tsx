import React from 'react';
import cn from 'classnames';

import { Divider } from 'components/divider';
import { Container } from 'components/container';

import styles from './topic.module.scss';

interface Props {
    title: string;
    className?: string;
}

export const Topic = ({ className, title }: Props) => {
    return (
        <Container className={cn(styles.root, className)}>
            <Divider width={70} />
            <h1 className={styles.title}>{title}</h1>
            <Divider className={styles.rightDivider} />
        </Container>
    );
};
