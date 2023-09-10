import React from 'react';

import { CreativeAndProduction } from './icons/creative-and-production';
import { Campa360 } from './icons/360-campa';
import { AignDevelopment } from './icons/aign-development';
import { Effective } from './icons/effective';
import { Content } from './icons/content';
import { Creation } from './icons/creation';
import { FlexContainer } from 'components/flex-container';
import { DigitalMarketing } from './icons/digital-marketing';
import { Strat } from './icons/strat';
import { Tegy } from './icons/tegy';
import { Block } from 'components/block/block';

import styles from './strategy-block.module.scss';

export const StrategyBlock = () => {
    return (
        <div className={styles.root}>
            <Block mt={32} ml={182}>
                <FlexContainer gap={16}>
                    <CreativeAndProduction />
                    <Campa360 />
                </FlexContainer>
            </Block>
            <Block mt={25}>
                <AignDevelopment />
            </Block>
            <Block mt={21} ml={2.5}>
                <FlexContainer gap={18}>
                    <Effective />
                    <Content />
                    <Creation />
                </FlexContainer>
            </Block>
            <Block mt={35} ml={308}>
                <FlexContainer gap={15}>
                    <DigitalMarketing />
                    <Strat />
                </FlexContainer>
            </Block>
            <Block mt={5}>
                <Tegy />
            </Block>
        </div>
    );
};
