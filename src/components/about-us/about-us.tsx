import React from 'react';

import { FlexContainer } from 'components/flex-container';
import { Container } from 'components/container';
import { StrategyBlock } from './strategy-block';

import styles from './about-us.module.scss';
import { useMobileContext } from 'contexts/mobile-context';
import { MobileStrategyBlock } from 'components/mobile/mobile-strategy-block/mobile-strategy-block';

export const AboutUs = () => {
    const isMobile = useMobileContext();

    return (
        <Container mt={isMobile ? 40 : 50} className={styles.root}>
            <FlexContainer className={styles.flexContainer}>
                <div className={styles.text}>
                    <p>We are a communication agency specializing in influencer marketing, digital and event.</p>
                    <br />
                    <p>
                        Our agency understands the importance of a comprehensive approach to marketing, which is why we
                        offer a range of services beyond influencer marketing and digital marketing. Our team is skilled
                        in branding, content creation, and public relations, ensuring every aspect of our clients'
                        marketing strategy is cohesive and effective. We take pride in staying ahead of the curve in the
                        ever-evolving world of marketing, continuously learning and adapting to new trends and
                        technologies to provide our clients with the most innovative and impactful campaigns possible.
                    </p>
                </div>
                {isMobile ? <MobileStrategyBlock /> : <StrategyBlock />}
            </FlexContainer>
        </Container>
    );
};
