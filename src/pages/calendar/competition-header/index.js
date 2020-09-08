import React, { Fragment } from 'react';
import moment from 'moment';
import clsx from 'clsx';
import useStyles from './use-styles';
import { NavLink as Link, useParams } from 'react-router-dom';
import { useService } from 'utils/reservices';
import { competition, competitionResultsMain, competitionSchedule, competitionMedals } from 'pages'

export default function CompetitionHeader() {
    const CompetitionsService = useService('competitions')
    const styles = useStyles();
    const params = useParams();
    const { competition: data, medals, reduced_event_schedules } = CompetitionsService.competition.payload;

    let endFormat = 'DD MMM YYYY'
    let startFormat = 'DD MMM YYYY'

    const startAt = moment(data.start_at);
    const endAt = moment(data.end_at);

    const yearIsEq = startAt.year() === endAt.year();
    const monthIsEq = startAt.month() === endAt.month();

    const logos = data.logos || {};

    if (yearIsEq && monthIsEq) {
        startFormat = 'DD'
    } else if (yearIsEq) {
        startFormat = 'DD MM'
    }

    const renderedLogos = (
        <Fragment>
            <div key='logo' className={styles.logo} style={{ backgroundImage: `url('${logos.championship_logo}')` }}>
                {logos.championship_logo}
            </div>

            {(data.competition_type_category_id === 3) && (
                <div key='logo_issf' className={styles.logo} style={{ backgroundImage: `url('${require('./android-chrome-512x512.png')}')` }}>
                </div>
            )}
        </Fragment>
    );

    const hasMedals = Object.values(medals).length > 0;
    const hasResults = reduced_event_schedules && Object.values(reduced_event_schedules).length > 0;


    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.info}>
                    <div className={styles.infoLeft}>
                        <h1 className={styles.title}>
                            {data.title}
                        </h1>
                        <div className={styles.props}>
                            <span>
                                {startAt.format(startFormat)} - {endAt.format(endFormat)}
                            </span>
                            <span>{data.location}</span>
                        </div>
                    </div>
                    <div className={styles.infoRight}>
                        {renderedLogos}
                    </div>
                </div>
                <div className={styles.navigationContainer}>
                    <ul className={styles.navigation}>
                        <li className={styles.navItem}>
                            <Link exact to={competition.getPath(params)} className={clsx(styles.navItemLink)}>
                                General information
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link exact to={competition.getPath(params) + '/pulse-beating'} className={clsx(styles.navItemLink, !data.has_articles && 'disabled')}>
                                news
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link exact to={competitionSchedule.getPath(params)} className={clsx(styles.navItemLink, (!data.event_schedules || !data.event_schedules.length) && 'disabled')}>
                                schedule
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to={competitionResultsMain.getPath(params)} className={clsx(styles.navItemLink, !hasResults && 'disabled')}>
                                results
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link exact to={competitionMedals.getPath(params)} className={clsx(styles.navItemLink, !hasMedals && 'disabled')} data-disabled={!hasMedals}>
                                medal standings
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.right}>
                {renderedLogos}
            </div>
        </div>
    )
}