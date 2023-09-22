import React from 'react';

import { Block } from 'components/block';
import { Divider } from 'components/divider';
import { FlexContainer } from 'components/flex-container';

import styles from './list-item.module.scss';

interface Props {
    indexNumber: string;
    title: string;
    description: string;
}

export const ListItem = ({ indexNumber, title, description }: Props) => {
    return (
        <Block className={styles.root}>
            <FlexContainer gap={90}>
                <Block className={styles.indexNumber}>{indexNumber}</Block>
                <Block width={509} className={styles.test}>
                    <Divider height={1} />
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </Block>
            </FlexContainer>
        </Block>
    );
};
