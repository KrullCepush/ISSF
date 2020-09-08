import React from 'react';
import useStyles from './use-styles';


export default function TableGroupCell({ title, values = [] }) {
    const styles = useStyles();

    return (
        <div className={styles.tableGroupCell}>
            {title && (
                <span className={styles.title}>
                    {title}
                </span>
            )}
            {values.length > 0 && (
                <div className={styles.group}>
                    {values.map((value, index) => (
                        <div key={index} className={styles.value}>
                            {value}
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}