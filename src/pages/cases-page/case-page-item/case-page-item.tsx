import React from 'react';

import { Block } from 'components/block';
import { FlexContainer } from 'components/flex-container';
import { ArrowIcon } from 'components/icons/arrow-icon';
import { IconButton } from 'components/icon-button';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from 'utils/scroll-to-top';

import styles from './case-page-item.module.scss';

interface Props {
    id: number | string;
    companyName: string;
    title: string;
    description: string;
    productLogo?: string;
}

const addZero = (value: string | number) => {
    if (Number(value) < 10) {
        return `0${value}`;
    }

    return value;
};

export const CasePageItem = ({ id, companyName, title, description, productLogo }: Props) => {
    return (
        <Block className={styles.root}>
            <h3 className={styles.heading}>
                <FlexContainer>
                    {productLogo && (
                        <img
                            width={50}
                            style={{ objectFit: 'contain', transform: 'translate(-12px, -2px)' }}
                            height={26}
                            src={productLogo}
                        />
                    )}
                    <span>{title}</span>
                </FlexContainer>
                {/* <h3 className={styles.heading}>{title}</h3> */}
                {/* {productLogo ? <img width={50} style={{objectFit: 'contain'}} height={26} src={productLogo} /> : <span>{companyName}.</span>} */}
                <span className={styles.number}>{addZero(id)}</span>
            </h3>
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
