import React from 'react';

import { Container } from 'components/container';
import { Logo } from 'components/logo';

import styles from './footer.module.scss';
import { HashLink } from 'react-router-hash-link';
import { getHashAnchor } from 'utils/get-hash-anchor';
import { Anchors } from 'constants/anchors';

export const Footer = () => {
    return (
        <Container className={styles.root}>
            <div className={styles.navs}>
                <HashLink to={getHashAnchor(Anchors.AboutUs)}>about us</HashLink>
                <HashLink to={getHashAnchor(Anchors.OurServices)}>our services</HashLink>
                <HashLink to={getHashAnchor(Anchors.Cases)}>cases</HashLink>
            </div>
            <div>
                <HashLink to={getHashAnchor(Anchors.Logo)}>
                    <Logo />
                </HashLink>
            </div>
            <div>
                <div>YELLOWMGT &copy; 2023 All rights reserved</div>
            </div>
        </Container>
    );
};
