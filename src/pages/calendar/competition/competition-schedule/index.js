import React from 'react';
import moment from 'moment';
import clsx from 'clsx';
import useStyles from './use-styles';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import { useService } from 'utils/reservices';


export default function CompetitionSchedule() {
    const styles = useStyles();
    const CompetitionsService = useService('competitions');
    const competition = CompetitionsService.competition.payload.competition || {};
    const schedule = competition.event_schedules || [];

    return (
        <Wrap>
            <Wrap>
                <PageInner>
                    <div className={styles.container}>
                        {schedule.map((phase, index, array) => {
                            const isFirstInDay = index === 0 || array[index - 1].date !== phase.date;
                            const isLastInDay = array.length - 1  === index || array[index + 1].date !== phase.date;

                            const phaseDate = isFirstInDay ? moment(phase.date) : null;
                            const weekday = phaseDate && phaseDate.format('dddd');
                            const date = phaseDate && phaseDate.format('DD.MM');
                            const time = [phase.start_time, phase.end_time]
                                .filter(Boolean)
                                .map(time => moment(time).format('HH:mm'))
                                .join(' - ')

                            return (
                                <div key={phase.id} className={clsx(styles.row, isFirstInDay && styles.first, isLastInDay && styles.last)}>
                                    <div className={styles.weekday}>
                                        {weekday}
                                    </div>
                                    <div className={styles.date}>
                                        {date}
                                    </div>
                                    <div className={styles.time}>
                                        {time}
                                    </div>
                                    <a className={styles.title}>
                                        {phase.title}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </PageInner>
            </Wrap>
        </Wrap>
    )
}