import React, { Fragment } from 'react';
import cn from 'classnames';

import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from './breadcrumbs.module.scss';

export const Breadcrumbs = () => {
    const location = useLocation();

    const crumbs = location.pathname.split('/').filter((crumb) => crumb);

    return (
        <div className={styles.root}>
            <NavLink to="/">MAIN PAGE </NavLink>
            {crumbs.map((crumb, index) => (
                <Fragment key={crumb}>
                    <span className={cn({ [styles.active]: index === crumbs.length - 1 })}>/</span>
                    <NavLink to={`/${crumb}`} className={cn({ [styles.active]: index === crumbs.length - 1 })}>
                        {crumb}
                    </NavLink>
                </Fragment>
            ))}
        </div>
    );
};
