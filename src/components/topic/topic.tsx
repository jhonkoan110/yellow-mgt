import React from 'react';
import cn from 'classnames';

import { Divider } from 'components/divider';
import { Container } from 'components/container';

import styles from './topic.module.scss';
import { Block } from 'components/block';

interface Props {
    title: string;
    className?: string;
    name?: string;
}

export const Topic = ({ className, title, name }: Props) => {
    return (
        <>
            <Block className={styles.root}>
                <Divider className={styles.divider}>
                    {name && <a id={name} className={styles.anchor} />}
                    <Container className={styles.container}>
                        <h1 className={styles.title}>{title}</h1>
                    </Container>
                </Divider>
            </Block>
        </>
    );
};
