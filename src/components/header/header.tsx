import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Container } from 'components/container';
import { Logo } from 'components/logo';
import { getHashAnchor } from 'utils/get-hash-anchor';
import { Anchors } from 'constants/anchors';

import styles from './header.module.scss';
import { useWindowDimensions } from 'hooks/use-window-dimensions';

export const Header = () => {
    const { width } = useWindowDimensions();

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

                        {width > 390 && (
                            <>
                                <li>
                                    <HashLink to={getHashAnchor(Anchors.AboutUs)} className={styles.link} smooth>
                                        about us
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink to={getHashAnchor(Anchors.OurServices)} className={styles.link}>
                                        our services
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink to={getHashAnchor(Anchors.Cases)} className={styles.link}>
                                        cases
                                    </HashLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
};
