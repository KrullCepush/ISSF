import React from 'react';
import clsx from 'clsx';

import useStyles from './use-styles';
import Athlete from '../athlete-block';

export default function Row({ className, data, Cmp, tableCode, index }) {
    const styles = useStyles();

    return (
        <div className={clsx(styles.row, className)}>
            {/* {children} */}
            <div className={styles.rowAthleteCotainer}>
                <Athlete head className={styles.head} />
                <Athlete data={data} athlete={data.athlete} />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '100%',
                    overflow: 'auto',
                }}
            >
                <Cmp
                    headClassName={styles.head}
                    tableCode={tableCode}
                    data={data}
                    index={index}
                />
            </div>
        </div>
    );
}
