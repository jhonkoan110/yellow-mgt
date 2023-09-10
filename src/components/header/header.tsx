import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from 'components/container';
import { Logo } from 'components/logo';

import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.root}>
            <Container>
                <nav>
                    <ul className={styles.headerInner}>
                        <li>
                            <NavLink to="/" className={styles.link}>
                                <Logo />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className={styles.link}>
                                about us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className={styles.link}>
                                our services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cases" className={styles.link}>
                                cases
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};
