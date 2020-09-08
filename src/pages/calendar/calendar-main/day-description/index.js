import React from 'react';
import moment from 'moment';
import useStyles from './use-styles';
import {useCalendarCompetitions} from '../use-calendar';
import Competition from './competition';

DayDescription.defaultProps = {
    selectedDay: new Date()
}

export default function DayDescription(props) {
    const styles = useStyles();
    const competitions = useCalendarCompetitions(props.selectedDay);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                {moment(props.selectedDay).format('D MMMM')}
            </div>
            <div className={styles.competitions}>
                {competitions.map(item => (
                    <Competition
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </div>
    )
}

