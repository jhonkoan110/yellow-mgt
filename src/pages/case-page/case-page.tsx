import React, { useEffect } from 'react';

import { Container } from 'components/container';
import { FlexContainer } from 'components/flex-container';
import { Block } from 'components/block';
import { useNavigate, useParams } from 'react-router-dom';
import { tmp } from 'constants/companies/igg';

import styles from './case-page.module.scss';
import { Breadcrumbs } from 'components/breadcrumbs';

export const CasePage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    console.log({ id });

    const data = tmp[id!];

    useEffect(() => {
        if (!data) {
            navigate('/cases');
        }
    }, []);

    if (!data) {
        return null;
    }

    return (
        <Container mt={50} className={styles.root}>
            <Breadcrumbs />
            <h1 className={styles.header}>{data.name}</h1>
            {data.addition && <h2 className={styles.addition}>{data.addition}</h2>}
            <Block mt={50}>
                <FlexContainer gap={40} wrap="wrap">
                    {data.cases?.map((caseItem) => (
                        <Block width={620} key={caseItem.id}>
                            <Block width={620} height={350} className={styles.image} />
                            <h3 className={styles.title}>{caseItem.title}</h3>
                            <p className={styles.description}>{caseItem.caseLabel}</p>
                        </Block>
                    ))}
                </FlexContainer>
            </Block>
        </Container>
    );
};
