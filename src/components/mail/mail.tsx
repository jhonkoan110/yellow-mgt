import React from 'react';

import { copyMail } from './mail.utils';
import { MAIL } from 'constants/mail';

import styles from './mail.module.scss';

export const Mail = () => {
    return (
        <div className={styles.root} onClick={copyMail} title="Copy to clipboard">
            {MAIL}
        </div>
    );
};
