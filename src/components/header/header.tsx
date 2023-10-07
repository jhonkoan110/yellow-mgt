import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Container } from 'components/container';
import { Logo } from 'components/logo';
import { getHashAnchor } from 'utils/get-hash-anchor';
import { Anchors } from 'constants/anchors';
import { useMobileContext } from 'contexts/mobile-context';
import { useBoolean } from 'hooks/use-boolean';
import { IconButton } from 'components/icon-button';
import { BurgerIcon } from 'components/icons/burger-icon';
import { MobileMenu } from 'components/mobile/mobile-navigation';
import { MobileLogo } from 'components/mobile/mobile-logo';

import styles from './header.module.scss';

export const Header = () => {
    const isMobile = useMobileContext();

    const { value: isMobileMenuOpen, setTrue: handleOpenMobileMenu, setFalse: handleCloseMobileMenu } = useBoolean();

    return (
        <header className={styles.root}>
            <Container>
                <nav>
                    <ul className={styles.headerInner}>
                        <li>
                            <NavLink to="/" className={styles.link}>
                                {isMobile ? <MobileLogo /> : <Logo />}
                            </NavLink>
                        </li>

                        {!isMobile && (
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
                                    <NavLink to="/cases" className={styles.link}>
                                        cases
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {isMobile && (
                            <IconButton onClick={handleOpenMobileMenu}>
                                <BurgerIcon />
                            </IconButton>
                        )}
                        {isMobileMenuOpen && isMobile && <MobileMenu onClose={handleCloseMobileMenu} />}
                    </ul>
                </nav>
            </Container>
        </header>
    );
};
