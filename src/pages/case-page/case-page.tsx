import React, { useEffect } from 'react';

import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import { Block } from 'components/block';
import { useNavigate, useParams } from 'react-router-dom';
import { tmp } from 'constants/companies/igg';

import styles from './case-page.module.scss';
import { Breadcrumbs } from 'components/breadcrumbs';
import { jData } from 'constants/main-data';
import { useMobileContext } from 'contexts/mobile-context';

const getImageWidth = (isMobile: boolean, isShort?: boolean) => {
    if (isShort) {
        return 290;
    }

    if (isMobile) {
        return 358;
    }

    return 620;
};

const getImageHeight = ({
    isMobile,
    isShort,
    caseHeight,
}: {
    isMobile: boolean;
    isShort?: boolean;
    caseHeight?: number;
}) => {
    if (isShort) {
        return 515;
    }

    if (isMobile) {
        return 202;
    }

    return caseHeight ?? 350;
};

export const CasePage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const isMobile = useMobileContext();

    const data = jData[id!];

    useEffect(() => {
        if (!data) {
            navigate('/cases');
        }
    }, []);

    if (!data) {
        return null;
    }

    return (
        <Container mt={isMobile ? 40 : 50} className={styles.root}>
            <Breadcrumbs />
            <h1 className={styles.header}>
                {data.companyName}. {data.title}
            </h1>
            {data.addition && <h2 className={styles.addition}>{data.addition}</h2>}
            <Block mt={isMobile ? 40 : 50}>
                <FlexContainer gap={40} wrap="wrap">
                    {data.cases?.map((caseItem) => (
                        <Block width={getImageWidth(isMobile, caseItem.isShortView)} key={caseItem.id}>
                            <img
                                src={caseItem.imageSrc}
                                style={{
                                    height: getImageHeight({
                                        isMobile,
                                        isShort: caseItem.isShortView,
                                        caseHeight: caseItem.height,
                                    }),
                                }}
                                className={styles.image}
                                alt={caseItem.imageSrc}
                            />
                            <h3 className={styles.title}>{caseItem.link}</h3>
                            <p className={styles.description}>{caseItem.link}</p>
                        </Block>
                    ))}
                </FlexContainer>
            </Block>
        </Container>
    );
};
