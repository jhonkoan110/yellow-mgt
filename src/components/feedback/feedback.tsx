import React from 'react';

import styles from './feedback.module.scss';
import { Divider } from 'components/divider';
import { FlexContainer } from 'components/flex-container';
import { Container } from 'components/container';

export const Feedback = () => {
    return (
        <div className={styles.root}>
            <Divider className={styles.divider}>
                <Container>
                    <FlexContainer className={styles.flexContainer} alignItems="center" gap={30.5}>
                        <h1 className={styles.title}>we build projects</h1>

                        <div className={styles.mailContainer}>
                            <div className={styles.mail}>nikita@yellowmgt.com</div>
                        </div>

                        <h1 className={styles.title}>that users love</h1>
                    </FlexContainer>
                </Container>
            </Divider>
        </div>
    );
};
