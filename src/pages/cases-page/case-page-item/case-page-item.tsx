import React from 'react';
import cn from 'classnames';

import { Block } from 'components/block';
import { FlexContainer } from 'components/flex-container';
import { ArrowIcon } from 'components/icons/arrow-icon';
import { IconButton } from 'components/icon-button';
import { NavLink } from 'react-router-dom';

import styles from './case-page-item.module.scss';
import { scrollToTop } from 'utils/scroll-to-top';

interface Props {
    id: number | string;
    companyName: string;
    title: string;
    description: string;
}

const addZero = (value: string | number) => {
    if (Number(value) < 10) {
        return `0${value}`;
    }

    return value;
};

export const CasePageItem = ({ id, companyName, title, description }: Props) => {
    return (
        <Block className={styles.root}>
            <h3 className={cn(styles.heading, styles.topHeading)}>
                <span>{companyName}.</span>
                <span className={styles.number}>{addZero(id)}</span>
            </h3>
            <h3 className={styles.heading}>{title}</h3>
            <Block mt={20}>
                <p className={styles.description}>{description}</p>
            </Block>
            <Block mt={64}>
                <FlexContainer justifyContent="flex-end">
                    <NavLink
                        to={`/cases/${id}`}
                        onClick={scrollToTop}
                        style={{ position: 'absolute', bottom: 30, right: 30 }}>
                        <IconButton>
                            <ArrowIcon />
                        </IconButton>
                    </NavLink>
                </FlexContainer>
            </Block>
        </Block>
    );
};
