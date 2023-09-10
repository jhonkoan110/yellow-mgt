import React from 'react';
import { Container } from 'components/container';

import styles from './header.module.scss';
import { Logo } from 'components/logo';

export const Header = () => {
    return (
        <header className={styles.root}>
            <Container className={styles.headerInner}>
                <Logo />
                <div>about us</div>
                <div>our services</div>
                <div>cases</div>
            </Container>
        </header>
    );
};
