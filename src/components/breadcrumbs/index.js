import React, { useDebugValue } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useLocation, matchPath, useParams } from 'react-router-dom';
import useLayout from 'hooks/use-layout';

import * as routes from 'pages';
import staticBreadcrumbs from './static-breadcrumbs';

import useStyles from './use-styles';

const listOfRoutes = staticBreadcrumbs.concat(Object.values(routes));

function useCurrentRoute() {
    const location = useLocation();
    const currentRoute = listOfRoutes.find(route => {
        const matched = matchPath(location.pathname, {
            ...route,
            exact: true,
        });
        return matched;
    });

    useDebugValue(currentRoute);
    return currentRoute;
}

export default function Breadcrumbs({ isWhite, ...props }) {
    const showLayout = useLayout();
    const styles = useStyles();
    const icon = isWhite ? require('./homeWhite.svg') : require('./home.svg');
    const params = useParams();
    const currentRoute = useCurrentRoute();

    if (!showLayout) {
        return null;
    }

    const items = currentRoute
        ? (currentRoute.breadcrumbs || [])
              .map(item => ({
                  title: item.pageTitle,
                  link: item.getPath(params),
              }))
              .filter(item => item.title)
        : [];

    return (
        <div className={clsx(styles.breabcrumbs, props.className)}>
            <ul className={isWhite ? styles.white : styles.list}>
                <li className={clsx(styles.listItem, styles.home)}>
                    <Link to="/" className={styles.homeIcon}>
                        <img src={icon} alt="" />
                    </Link>
                </li>
                {items.map(item => (
                    <li className={styles.listItem} key={item.link}>
                        <Link
                            to={item.link}
                            className={isWhite ? styles.white : undefined}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
                {currentRoute && currentRoute.pageTitle && (
                    <li className={styles.listItem}>
                        <span className={isWhite ? styles.white : undefined}>
                            {currentRoute.pageTitle}
                        </span>
                    </li>
                )}
            </ul>
        </div>
    );
}
