import React from 'react';
import useStyles from './use-styles';
import StaticPage from 'pages/static-page'

export default function Component() {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <StaticPage slug="officially-recognized-by-the-issf" contentOnly style={{ margin: 0 }}/>
        </div>
    )
}