import React, { useEffect } from 'react';

import { Block } from 'components/block';
import { FlexContainer } from 'components/flex-container';
import { IconButton } from 'components/icon-button';
import { CrossIcon } from 'components/icons/cross-icon';
import { Mail } from 'components/mail';
import { MobileLogo } from '../mobile-logo';
import { HashLink } from 'react-router-hash-link';
import { Anchors } from 'constants/anchors';
import { getHashAnchor } from 'utils/get-hash-anchor';
import { NavLink } from 'react-router-dom';

import styles from './mobile-menu.module.scss';

interface MobileMenuProps {
    onClose: VoidFunction;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
    useEffect(() => {
        const html = document.querySelector('html');

        if (html) {
            html.style.overflow = 'hidden';
        }

        return () => {
            if (html) {
                html.style.overflow = 'visible';
            }
        };
    }, []);

    return (
        <Block className={styles.root}>
            <FlexContainer flexDirection="column" justifyContent="space-between" className={styles.container}>
                <Block>
                    <FlexContainer justifyContent="space-between" alignItems="center" className={styles.header}>
                        <div>
                            <NavLink to={getHashAnchor(Anchors.Logo)} onClick={onClose}>
                                <MobileLogo />
                            </NavLink>
                        </div>
                        <IconButton onClick={onClose}>
                            <CrossIcon />
                        </IconButton>
                    </FlexContainer>
                    <nav>
                        <ul className={styles.navList}>
                            <li className={styles.listItem}>
                                <HashLink to={getHashAnchor(Anchors.AboutUs)} onClick={onClose}>
                                    about us
                                </HashLink>
                            </li>
                            <li className={styles.listItem}>
                                <HashLink to={getHashAnchor(Anchors.OurServices)} onClick={onClose}>
                                    our services
                                </HashLink>
                            </li>
                            <li className={styles.listItem}>
                                <HashLink to={getHashAnchor(Anchors.Cases)} onClick={onClose}>
                                    cases
                                </HashLink>
                            </li>
                        </ul>
                    </nav>
                </Block>
                <Block mb={80} mt="auto" className={styles.mailContainer}>
                    <Mail />
                </Block>
            </FlexContainer>
        </Block>
    );
};
