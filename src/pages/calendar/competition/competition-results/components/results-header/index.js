import React from 'react';
import useStyles from './use-styles';
import { Link } from 'react-router-dom';
import { competitionResultsMain } from 'pages';

export default function ResultsHeader({ id, title, subtitle, date, time, file }) {
    const styles = useStyles();

    return (
        <div className={styles.resultsHeader}>
            <Link to={competitionResultsMain.getPath(id)} className={styles.back}>
                Back to all results
            </Link>
            <div className={styles.info}>
                <div className={styles.name}>
                    <span className={styles.subtitle}>{subtitle}</span>
                    <span className={styles.title}>{title}</span>
                </div>
                <div className={styles.datetime}>
                    <span className={styles.date}>{date}</span>
                    <span className={styles.time}>{time}</span>
                </div>
                <a href={file || '/'} className={styles.fileLink}>
                    <img src={require('assets/icons/pdf-icon.svg')} alt="" className={styles.fileIcon} />
                </a>
            </div>
        </div>
    )
}