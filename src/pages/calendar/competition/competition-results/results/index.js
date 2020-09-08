import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Loader from 'components/loader';
import useStyles, { useTableStyles } from './use-styles';
import ResultsHeader from '../components/results-header';
import { useService } from 'utils/reservices';

import RiflePistol from './tables/rifle-pistol-base';
import RiflePistolFinal from './tables/rifle-pistol-final';
import Rifle3Pos from './tables/rifle-3pos-base';
import Rifle3PosFinal from './tables/rifle-3pos-final';
import Pistol25MBase from './tables/pistol-25m-base';
import Pistol25MFinal from './tables/pistol-25m-final';
import PistolRapidBase from './tables/pistol-rapid-base';
import PistolRapidFinal from './tables/pistol-rapid-final';
import ShotgunBase from './tables/shotgun-base';
import ShotgunFinal from './tables/shotgun-final';

import Common from './tables/common';

import RiflePistolNew from './tables/rifle-pistol-base-new';

import Row from './row';
import moment from 'moment';

function getTableComponent(tableCode) {
    switch (tableCode) {
        case '55-3':
        case '57-3':
        case '56-3':
        case '60-3':
        case '62-3':
        case '61-3':
        case '88-3':
            return RiflePistolNew;
        case '55-2':
        case '56-2':
        case '60-2':
        case '61-2':
        case '58-2':
        case '88-2':
        case '74-2':
        case '53-2':
            return props => {
                return <Row Cmp={RiflePistolFinal} {...props} />;
            };
        case '91-3':
        case '80-4':
        case '104-3':
        case '104-4':
        case '80-3':
        case '80-6':
        case '93-6':
            return props => {
                return <Row Cmp={Rifle3Pos} {...props} />;
            };
        case '91-2':
        case '80-2':
        case '104-2':
            return props => {
                return <Row Cmp={Rifle3PosFinal} {...props} />;
            };
        case '93-3':
            return props => {
                return <Row Cmp={PistolRapidBase} {...props} />;
            };
        case '100-3':
            return props => {
                return <Row Cmp={Pistol25MBase} {...props} />;
            };
        case '57-2':
        case '93-2':
            return props => {
                return <Row Cmp={PistolRapidFinal} {...props} />;
            };
        case '100-2':
            return props => {
                return <Row Cmp={Pistol25MFinal} {...props} />;
            };
        case '112-3':
        case '113-3':
        case '95-3':
        case '96-3':
            return props => {
                return <Row Cmp={ShotgunBase} {...props} />;
            };
        case '112-2':
        case '113-2':
        case '95-2':
        case '96-2':
            return props => {
                return <Row Cmp={ShotgunFinal} {...props} />;
            };
        default:
            return RiflePistolNew;
    }
}

export default function ResultsVatiant1() {
    const styles = useStyles();
    const CompetitionsService = useService('competitions');
    const params = useParams();

    const { payload, pending } = CompetitionsService.results;

    const { event_schedule = {}, results = [] } = payload;

    const tableCode = `${event_schedule.event_discipline_category_id}-${event_schedule.result_phase_type_id}`;
    const RowComponent = getTableComponent(tableCode);

    useEffect(() => {
        CompetitionsService.getCompetitionResults(params.eventId);
    }, [0]);

    return (
        <Wrap>
            <Wrap>
                <PageInner className={styles.container}>
                    {pending ? (
                        <Loader />
                    ) : (
                            <>
                                <ResultsHeader
                                    subtitle={[
                                        event_schedule.gun_type,
                                        event_schedule.discipline_category_title,
                                        '',
                                    ].join(' / ')}
                                    title={`RESULTS OF ${event_schedule.phase_title} ${event_schedule.extension_title}`}
                                    date={moment(event_schedule.date).format(
                                        'MMMM DD, dddd'
                                    )}
                                    time={`${moment
                                        .utc(event_schedule.start_time)
                                        .format('HH:mm')}
                                        ${event_schedule.end_time ? ' - ' + moment
                                            .utc(event_schedule.end_time)
                                            .format('HH:mm') : ''}`}
                                />
                                <div>
                                    {results.map((item, index) => (
                                        <RowComponent
                                            key={item.info.id}
                                            tableCode={tableCode}
                                            data={item}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                    {/*  */}
                </PageInner>
            </Wrap>
        </Wrap>
    );
}
