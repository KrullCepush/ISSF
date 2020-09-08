import React from 'react';
import useStyles from './use-styles';


export default function PageHeader(props) {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {props.title}
            </h2>
            {props.children}
        </div>
    )
}