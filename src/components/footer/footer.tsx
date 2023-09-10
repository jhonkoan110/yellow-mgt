import React from 'react';

import styles from './footer.module.scss';
import { Container } from 'components/container';
import { Logo } from 'components/logo';

export const Footer = () => {
    return (
        <Container className={styles.root}>
            <div className={styles.navs}>
                <div>about us</div>
                <div>our services</div>
                <div>cases</div>
            </div>
            <div>
                <Logo />
            </div>
            <div>
                <div>YELLOWMGT &copy; 2023 All rights reserved</div>
                <div className={styles.privacy}>Privacy Policy</div>
            </div>
        </Container>
    );
};
