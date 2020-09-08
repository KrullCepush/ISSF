import React from 'react';
import useStyles from "./style"
import clsx from 'clsx';



export default function AthleteBio({ data }) {
    const styles = useStyles();
    return (
        <div className={styles.containerInfo}>
            <div className={styles.personalInformation}>
                <Property title='HEIGHT' value={data.height} />
                <Property title='WEIGHT' value={data.weight} />
                <Property title='RESIDENCE' value={data.residence} />
                <Property title='PROFESSION' value={data.profession} />
                <Property title='CLUB' value={data.club} />
                <Property title='COMPETING START' value={data.competing_start_year} />
                <Property title='Practising shooter since' value={data.shooting_start_year} />
                <Property title='Personal Coach' value={data.coach} />
                <Property title='National Coach' value={data.national_couch} />
                <Property title='Handedness' value={data.hand} />
                <Property title='National Coach' value={data.eye} />
                <Property title='Place of birth' value={data.birth_place} />
                <Property title='Hometown' value={data.hometown} />
                <Property title='Marital status' value={data.marital_status} />
                <Property title='Higher education' value={data.higher_education} />
                <Property title='Hobbies' value={data.interests} />
                <Property title='Languages' value={data.languages} />
            </div>
        </div>
    )
}

function Property({ title, value }) {
    const styles = useStyles();
    if (value === null || value == 0 || value === undefined) {
        return null
    }
    return (
        <div className={clsx(styles.block, styles.blockBio)}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.value}>
                {value}
            </div>
        </div>
    )
}
