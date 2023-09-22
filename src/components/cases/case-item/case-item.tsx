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

interface Props extends CompanyCase {
    // id: number | string;
    title: string;
    addition: string;
}

export const CaseItem = ({ link, title, imageSrc, addition, caseLabel }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Block className={cn(styles.root, { [styles.expanded]: isOpen })}>
            <Container className={styles.container}>
                <Block mt={30} mb={30}>
                    <FlexContainer justifyContent="space-between">
                        <FlexContainer>
                            {isOpen && <Block className={styles.image} />}
                            {!isOpen ? (
                                <Block className={styles.title}>{caseLabel}</Block>
                            ) : (
                                <FlexContainer flexDirection="column" justifyContent="space-between">
                                    <Block className={styles.title}>{caseLabel}</Block>
                                    <Block>{addition}</Block>
                                </FlexContainer>
                            )}
                        </FlexContainer>
                        <Block>
                            <IconButton
                                className={cn(styles.toggleButton, { [styles.mirror]: isOpen })}
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
