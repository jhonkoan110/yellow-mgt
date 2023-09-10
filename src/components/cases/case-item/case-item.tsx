import React, { useState } from 'react';
import cn from 'classnames';

import styles from './case-item.module.scss';
import { Block } from 'components/block';
import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import { Button } from 'components/button';
import { ArrowIcon } from 'components/icons/arrow-icon';

interface Props {
    id: number | string;
    title: string;
    addition: string;
}

export const CaseItem = ({ id, title, addition }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Block className={styles.root}>
            <Container>
                <Block mt={30} mb={30}>
                    <FlexContainer justifyContent="space-between">
                        <FlexContainer>
                            {isOpen && <Block className={styles.image} />}
                            {!isOpen ? (
                                <Block className={styles.title}>{title}</Block>
                            ) : (
                                <FlexContainer flexDirection="column" justifyContent="space-between">
                                    <Block className={styles.title}>{title}</Block>
                                    <Block>{addition}</Block>
                                </FlexContainer>
                            )}
                        </FlexContainer>
                        <Block>
                            <Button
                                className={cn(styles.toggleButton, { [styles.mirror]: isOpen })}
                                onClick={handleClick}>
                                <ArrowIcon />
                            </Button>
                        </Block>
                    </FlexContainer>
                </Block>
            </Container>
        </Block>
    );
};
