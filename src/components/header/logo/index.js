import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './use-styles';

export default function Logo(props) {

    const styles = useStyles();

    return (
        <Link to="/" className={styles.logoWrapper}>
            <img src={require('./logo.svg')} className={styles.logo} />
        </Link>
    )
}