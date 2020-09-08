import React from 'react';
import useStyles from './use-styles';


export default function Field(props) {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.title} style={{ backgroundImage: `url(${props.icon})` }}>
                {props.title}:
            </div>
            {props.subtitle && (
                <div className={styles.subtitle}>
                    {props.subtitle}
                </div>
            )}
            {props.children}
        </div>
    )
}