import React from 'react';
import useStyles from './use-styles';


export default function DisciplineBlock({ title, children }) {
    const styles = useStyles();

    return (
        <div className={styles.disciplineBlock}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}