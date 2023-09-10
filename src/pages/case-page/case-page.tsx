import React from 'react';

import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import { Block } from 'components/block';

import styles from './case-page.module.scss';

export const CasePage = () => {
    return (
        <Container mt={50} className={styles.root}>
            <h1>IGG. Lords Mobile</h1>
            <Block mt={50}>
                <FlexContainer gap={40} wrap="wrap">
                    <Block width={620}>
                        <Block width={620} height={350} className={styles.image} />
                        <h3 className={styles.title}>название видео или блоггер</h3>
                        <p className={styles.description}>360° Campaign Development</p>
                    </Block>
                    <Block width={620}>
                        <Block width={620} height={350} className={styles.image} />
                        <h3 className={styles.title}>название видео или блоггер</h3>
                        <p className={styles.description}>360° Campaign Development</p>
                    </Block>
                    <Block width={620}>
                        <Block width={620} height={350} className={styles.image} />
                        <h3 className={styles.title}>название видео или блоггер</h3>
                        <p className={styles.description}>360° Campaign Development</p>
                    </Block>
                    <Block width={620}>
                        <Block width={620} height={350} className={styles.image} />
                        <h3 className={styles.title}>название видео или блоггер</h3>
                        <p className={styles.description}>360° Campaign Development</p>
                    </Block>
                    <Block width={620}>
                        <Block width={620} height={350} className={styles.image} />
                        <h3 className={styles.title}>название видео или блоггер</h3>
                        <p className={styles.description}>360° Campaign Development</p>
                    </Block>
                    <Block width={620}>
                        <Block width={620} height={350} className={styles.image} />
                        <h3 className={styles.title}>название видео или блоггер</h3>
                        <p className={styles.description}>360° Campaign Development</p>
                    </Block>
                    <Block width={620}>
                        <Block width={620} height={350} className={styles.image} />
                        <h3 className={styles.title}>название видео или блоггер</h3>
                        <p className={styles.description}>360° Campaign Development</p>
                    </Block>
                    <Block width={620}>
                        <Block width={620} height={350} className={styles.image} />
                        <h3 className={styles.title}>название видео или блоггер</h3>
                        <p className={styles.description}>360° Campaign Development</p>
                    </Block>
                </FlexContainer>
            </Block>
        </Container>
    );
};
