import React from 'react';
import useStyles from './use-styles';


export default function Component() {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            Search or filter by category or country to find athletes
        </div>
    )
}