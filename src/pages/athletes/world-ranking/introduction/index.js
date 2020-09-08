import React from 'react';
import useStyles from './use-styles';
import StaticPage from 'pages/static-page'

export default function Component() {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>World Ranking Introduction</h2>
            <StaticPage slug="world-ranking-system" contentOnly style={{ margin: 0 }}/>
        </div>
    )
}