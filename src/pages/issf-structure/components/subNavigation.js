import React from 'react'

import {
    sectionRunningTargetCommittee,
    sectionShotGunCommittee,
    sectionPistolCommittee,
    sectionRiffleCommittee
} from 'pages';
import { NavLink as Link, useParams } from 'react-router-dom';
import useStyles from './use-styles';
import clsx from 'clsx';

export default function SubNavigation() {
    const styles = useStyles();
    const params = useParams();

    return (
        <div className={styles.navigationContainer}>
            <ul className={styles.navigation}>
                <li className={styles.navItem}>
                    <Link exact to={sectionRiffleCommittee.getPath(params)} className={clsx(styles.navItemLink)}>
                        ISSF Rifle Committee
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link exact to={sectionPistolCommittee.getPath(params)} className={clsx(styles.navItemLink)}>
                        ISSF Pistol Committee
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link exact to={sectionRunningTargetCommittee.getPath(params)} className={clsx(styles.navItemLink)}>
                        ISSF Running Target
                        <br />
                        Committee
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link exact to={sectionShotGunCommittee.getPath(params)} className={clsx(styles.navItemLink)}>
                        ISSF Shotgun
                        <br />
                        Committee
                    </Link>
                </li>
            </ul>
        </div>
    )
}


