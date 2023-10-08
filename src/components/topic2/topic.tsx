import React from 'react';

import { Divider } from 'components/divider';
import { useMobileContext } from 'contexts/mobile-context';
import { MobileTopic } from 'components/mobile/mobile-topic';

import styles from './topic.module.scss';

interface Props {
    title: string;
    name?: string;
}

export const Topic2 = ({ title, name }: Props) => {
    const isMobile = useMobileContext();

    return isMobile ? (
        <MobileTopic title={title} name={name} />
    ) : (
        <div className={styles.root}>
            <Divider height={2} />
            {name && <a id={name} className={styles.anchor} />}
            <div className={styles.container}>
                <Divider height={2} width={70} />
                <h2 className={styles.title}>{title}</h2>
                <Divider height={2} />
            </div>
            <Divider height={2} />
        </div>
    );
};
