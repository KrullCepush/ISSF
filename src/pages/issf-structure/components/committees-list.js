import React from 'react';

import useStyles from './use-styles';
import getCommitteesInfo from './committees-info';
import { NavLink as Link } from 'react-router-dom';

export default function CommitteesList({ title }) {
    const styles = useStyles();
    const committeesInfo = getCommitteesInfo();

    return (
        <div className={styles.wrapper}>
            <div className={styles.pageTitle}>
                {title}
            </div>
            <div className={styles.content}>
                {committeesInfo.map(commitee => (
                    <div className={styles.committeeWrapper} key={commitee.title}>
                        <div className={styles.committeeTitle}>
                            <Link exact to={commitee.linkTo} >
                                {commitee.title}
                            </Link>
                        </div>
                        <div className={styles.committeeDescription}>
                            {commitee.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
