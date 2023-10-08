import React, { useState } from 'react';
import cn from 'classnames';

import { Block } from 'components/block';
import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import { ArrowIcon } from 'components/icons/arrow-icon';
import { IconButton } from 'components/icon-button';
import { CompanyCase } from 'types/company';
import { useMobileContext } from 'contexts/mobile-context';
import { ConditionalLink } from 'pages/case-page/case-page';

import styles from './case-item.module.scss';

interface Props extends CompanyCase {
    title: string;
    addition: string;
    productLogo?: string;
}

export const Title = ({
    productLogo,
    title,
    isMobile,
}: {
    productLogo?: string;
    title: string;
    isMobile?: boolean;
}) => {
    return (
        <Block className={styles.title} mt={isMobile ? 10 : 0}>
            {productLogo && <img width="50px" style={{ transform: 'translateY(-5px)' }} src={productLogo} alt="" />}
            {title}
        </Block>
    );
};

export const CaseItem = ({ title, imageSrc, addition, productLogo, link }: Props) => {
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
                                <ConditionalLink link={link}>
                                    <Block className={styles.imageContainer}>
                                        <img className={styles.image} src={imageSrc} />
                                    </Block>
                                </ConditionalLink>
                            )}
                            {!isOpen ? (
                                <Title title={title} productLogo={productLogo} />
                            ) : (
                                <FlexContainer flexDirection="column" justifyContent="space-between">
                                    <Title title={title} productLogo={productLogo} isMobile={isMobile} />
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
