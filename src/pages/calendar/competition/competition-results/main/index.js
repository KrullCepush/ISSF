import React from 'react';
import useStyles from './use-styles';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Loader from 'components/loader';
import { useService } from 'utils/reservices';

import DisciplineBlock from './components/discipline-block'
import EventBlock from './components/event-block'


export default function CompetitionResultsMain() {
    const styles = useStyles();
    const CompetitionsService = useService('competitions');

    const { payload, pending, isInited } = CompetitionsService.competition;
    const schedule = payload.reduced_event_schedules || [];

    return (
        <Wrap>
            <Wrap>
                <PageInner className={styles.container}>
                    {(!isInited || pending) ? <Loader /> : schedule.map(item => (
                        <DisciplineBlock key={item.title} title={item.title}>
                            {item.events.map(event => (
                                <EventBlock key={event.id} title={event.title} data={event.phases} />
                            ))}
                        </DisciplineBlock>
                    ))}
                </PageInner>
            </Wrap>
        </Wrap>
    )
}