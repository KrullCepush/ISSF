import React, { Fragment } from 'react';
import useStyles, { useRankStyles, useNameStyles, usePropertyStyles } from './styles';
import clsx from 'clsx';
import Flag from 'components/flag';
import moment from 'moment';

export default function AthleteInfo({ data }) {
    const styles = useStyles();
    const rank = useRankStyles();
    const name = useNameStyles();

    const birthday = +moment(moment() - moment(data.birthday)).format('YYYY') - 1970;

    let rankDiffClassName;

    if (data.world_rank) {
        if (data.world_rank.rank < data.world_rank.previous_rank) {
            rankDiffClassName = '_up'
        }

        if (data.world_rank.rank > data.world_rank.previous_rank) {
            rankDiffClassName = '_down'
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <div
                    className={styles.avatarImage}
                    style={{
                        backgroundImage: `url(https://result.issf-sports.info/get_image.php?issfid=${data.external_id})`
                    }}
                />
            </div>
            <div className={rank.rank}>
                {data.world_rank && (
                    <Fragment>
                        <div className={rank.label}>WORLD RANK</div>
                        <div className={clsx(rank.value, rank.DiffClassName)}>
                            {data.world_rank.rank}
                        </div>
                    </Fragment>
                )}
            </div>
            <div className={name.name}>
                <div className={name.wrap}>
                    <div className={name.last_name}>
                        {data.last_name}
                    </div>
                    <div className={name.first_name}>
                        {data.first_name}
                    </div>
                </div>
                <div className={clsx(styles.country)}>
                    <Flag code={data.country_old_fckn_code} />
                </div>
            </div>
            <div className={clsx(styles.personal)}>
                <Property className="xs sm" value={(
                    <Flag code={data.country_old_fckn_code} />
                )} />
                <Property title="BIRTHDAY" value={moment(data.birthday).format('DD.MM.YYYY')} />
                <Property title="AGE" value={birthday} />
                <Property title="GENDER" value={data.gender[0]} />

            </div>
        </div>
    )
}

function Property({ title, value, className }) {
    const styles = usePropertyStyles();
    if (!value) {
        return null;
    }
    return (
        <div className={clsx(styles.block, className)}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.value}>
                {value}
            </div>
        </div>
    )
}