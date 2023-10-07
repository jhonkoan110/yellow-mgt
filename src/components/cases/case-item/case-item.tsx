import React, { useState } from 'react';
import cn from 'classnames';

import styles from './case-item.module.scss';
import { Block } from 'components/block';
import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import { Button } from 'components/button';
import { ArrowIcon } from 'components/icons/arrow-icon';
import { IconButton } from 'components/icon-button';
import { CompanyCase } from 'types/company';
import { useMobileContext } from 'contexts/mobile-context';

interface Props extends CompanyCase {
    // id: number | string;
    title: string;
    addition: string;
}

export const CaseItem = ({ link, title, imageSrc, addition, caseLabel }: Props) => {
    const isMobile = useMobileContext();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Block className={cn(styles.root, { [styles.expanded]: isOpen })}>
            <Container className={styles.container}>
                <Block mt={30} mb={30}>
                    <FlexContainer justifyContent="space-between">
                        <FlexContainer className={styles.flexContainer}>
                            {isOpen && (
                                <Block className={styles.image}>
                                    <img src={imageSrc} style={{ height: '100%', width: '100%', display: 'block' }} />
                                </Block>
                            )}
                            {!isOpen ? (
                                <Block className={styles.title}>{caseLabel}</Block>
                            ) : (
                                <FlexContainer flexDirection="column" justifyContent="space-between">
                                    <Block mt={isMobile ? 10 : 0} className={styles.title}>
                                        {caseLabel}
                                    </Block>
                                    <FlexContainer justifyContent="space-between" className={styles.additionContainer}>
                                        <Block>{addition}</Block>
                                        {isMobile && isOpen && (
                                            <IconButton
                                                onClick={handleClick}
                                                className={cn({ [styles.mirror]: isOpen }, styles.toggleButton)}>
                                                <ArrowIcon />
                                            </IconButton>
                                        )}
                                    </FlexContainer>
                                </FlexContainer>
                            )}
                        </FlexContainer>

                        <Block>
                            <IconButton
                                className={cn(styles.toggleButton, {
                                    [styles.mirror]: isOpen,
                                    [styles.none]: isMobile && isOpen,
                                })}
                                onClick={handleClick}>
                                <ArrowIcon />
                            </IconButton>
                        </Block>
                    </FlexContainer>
                </Block>
            </Container>
        </Block>
    );
};
