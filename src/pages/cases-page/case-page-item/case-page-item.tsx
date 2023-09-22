import React from 'react';

import { Block } from 'components/block';
import { FlexContainer } from 'components/flex-container';
import { ArrowIcon } from 'components/icons/arrow-icon';

import styles from './case-page-item.module.scss';
import { IconButton } from 'components/icon-button';
import { NavLink } from 'react-router-dom';

interface Props {
    id: number | string;
    companyName: string;
    title: string;
    description: string;
}

export const CasePageItem = ({ id, companyName, title, description }: Props) => {
    return (
        <Block className={styles.root}>
            <h3 className={styles.heading}>{companyName}.</h3>
            <h3 className={styles.heading}>{title}</h3>
            <Block mt={20}>
                <p className={styles.description}>{description}</p>
            </Block>
            <Block mt={64}>
                <FlexContainer justifyContent="flex-end">
                    <NavLink to={`/cases/${id}`}>
                        <IconButton>
                            <ArrowIcon />
                        </IconButton>
                    </NavLink>
                </FlexContainer>
            </Block>
        </Block>
    );
};
