import React from 'react';

import { FlexContainer } from 'components/flex-container';
import { Container } from 'components/container';
import { Mail } from 'components/mail';

import styles from './feedback.module.scss';

export const Feedback = () => {
    return (
        <Container className={styles.root}>
            <FlexContainer flexDirection="column" alignItems="center" gap={50}>
                <h1 className={styles.title}>we build projects</h1>
                <Mail />
                <h1 className={styles.title}>that users love</h1>
            </FlexContainer>
        </Container>
    );
};
