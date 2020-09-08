import React from 'react';
import useStyles from './use-styles';


export default function Component() {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            template
        </div>
    )
}