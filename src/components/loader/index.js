import React from 'react';
import useStyles from './use-styles';

export default function Loader() {
    const styles = useStyles();
    return <div className={styles.loader} />
}