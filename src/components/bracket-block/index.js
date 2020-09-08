import React from 'react';
import useStyles from './use-styles';


export default function BracketBlock({ title, children }) {
    const styles = useStyles();

    return (
        <div className={styles.block}>
            <div className={styles.name}>
                <h3 className={styles.title}>
                    {title}
                </h3>
            </div>
            <div className={styles.bracket} />
            <div className={styles.content}>
                {children || ''}
            </div>
        </div>
    )
}