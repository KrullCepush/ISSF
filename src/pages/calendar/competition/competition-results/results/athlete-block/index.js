import React from 'react';
import clsx from 'clsx';
import Flag from 'components/flag';

import useStyles from './use-styles';
import { athletePage } from 'pages';
import { Link } from 'react-router-dom';



export default function AthleteBlock({ data, head = false, ...props }) {
    const styles = useStyles();

    if (head) {
        return (
            <div className={clsx(styles.headContainer, props.className)}>
                <div className={clsx(styles.athlete)}>
                    <div className={clsx(styles.col, styles.rank)}>
                        rank
                    </div>
                    <div className={clsx(styles.col, styles.bib)}>
                        bib
                    </div>
                    <div className={clsx(styles.col, styles.avatarHead)}>
                        {/* avatar */}
                    </div>
                    <div className={clsx(styles.col, styles.name)}>
                        name
                    </div>
                    <div className={clsx(styles.col, styles.country)}>
                        nat
                    </div>
                </div>
            </div>
        )
    } else {
        // search here
        return (
            <div className={clsx(styles.container, props.className)}>

                <Link to={athletePage.getPath({ id: data.athlete.info.id })} className={styles.athlete}>
                    <div className={clsx(styles.col, styles.rank)}>
                        {data.info.rank}
                    </div>
                    <div className={clsx(styles.col, styles.bib)}>
                        {data.info.bib_nr}
                    </div>
                    <div className={styles.col}>
                        <div
                            className={styles.avatar}
                            style={{
                                backgroundImage: `url(https://result.issf-sports.info/get_image.php?issfid=${data.athlete.info.external_id}&width=32)`
                            }
                            }
                        />
                    </div>
                    <div className={clsx(styles.col, styles.name)}>
                        {data.athlete.info.first_name} {data.athlete.info.last_name}
                    </div>
                    <div className={clsx(styles.col, styles.country)}>
                        <Flag code={data.athlete.country.ioc_code} width={32} />
                    </div>
                </Link>
            </div>
        )
    }
}