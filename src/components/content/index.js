import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';
import { useRouteMatch } from 'react-router-dom';

import { home } from 'pages'

export default function Content(props) {

    const styles = useStyles();
    const isHome = useRouteMatch(home);

    return (
        <main className={clsx(styles.content, isHome && styles.contentHome)}>
            {props.children}
        </main>
    )
}