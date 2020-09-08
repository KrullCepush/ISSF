import React from 'react';
import moment from 'moment';
import { useMonthStyles, useCompetitionStyles } from './use-styles';
import { useCalendarMonthCompetitions } from '../use-calendar';
import { Link } from 'react-router-dom';
import { competition } from 'pages';
import clsx from 'clsx';

const yearMonths = new Array(12).fill(null);

export default function ListView(props) {
    const { yearly, date } = props;


    return (
        <div className={clsx(yearly && '_year')}>
            {yearly ? yearMonths.map((_, month) => {
                const monthDate = new Date(date);

                monthDate.setMonth(month, 1);

                return (
                    <Month key={month} date={monthDate} />
                )
            }) : (
                    <Month date={date} />
                )}
        </div>
    );
}

function Month(props) {
    const styles = useMonthStyles();
    const competitions = useCalendarMonthCompetitions(props.date);

    if (competitions.length > 0) {
        return (
            <div className={styles.month}>
                <div className={clsx(styles.monthName)}>
                    {moment(props.date).format('MMMM')}
                </div>
                <div className={styles.competitions}>
                    {competitions.map(item => (
                        <Competition key={item.id} data={item} />
                    ))}
                </div>
            </div>
        )
    }
    return null

}

function Competition(props) {
    const { data } = props;
    const styles = useCompetitionStyles();

    let endFormat = 'DD[.]MM';
    let startFormat = 'DD[.]MM';

    const startAt = moment(data.start_at);
    const endAt = moment(data.end_at);

    const monthIsEq = startAt.month() === endAt.month();

    // const {images=[]} = data;

    if (monthIsEq) {
        startFormat = 'DD'
    }

    return (
        <Link to={competition.getPath(data)} className={styles.competition}>
            <div className={styles.dates}>
                {startAt.format(startFormat)} - {endAt.format(endFormat)}
            </div>
            <div className={styles.main}>
                <div className={styles.title}>
                    {data.title}
                </div>
                <div className={styles.place}>
                    {data.location +', '+ data.country_iso_code}
                </div>
            </div>
        </Link>
    )
}