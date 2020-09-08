import React from 'react';
import useStyles from './use-styles';
import Table from 'components/table';
import Flag from 'components/flag';
import { useService } from 'utils/reservices';

import { renderAthleteName, renderAthleteRow } from "components/table-athletes"

export default function SearchNationName(props) {
    const Quota = useService('quota');
    const styles = useStyles();

    const dataQuota = Quota.quotaPlaces.payload
        .sort(function (a, b) {
            if (String(a.event_discipline_category_id) > String(b.event_discipline_category_id)) {
                return 1;
            }
            if (String(a.event_discipline_category_id) < String(b.event_discipline_category_id)) {
                return -1;
            }
            return 0;
        }).sort(function (a, b) {
            if (String(a.nation) > String(b.nation)) {
                return 1;
            }
            if (String(a.nation) < String(b.nation)) {
                return -1;
            }
            return 0;
        });

    const CommonService = useService('common');
    const DisciplineList = CommonService.metaInfo.payload.world_rank_discipline_categories
    const discipline = (category_id) => {
        const data = DisciplineList.find(discipline => discipline.id === category_id);
        return data && data.title
    }

    const columns = [{
        name: 'nation',
        title: 'NATION',
        render: (row, col, props) => renderAthleteRow(row, col, props, <Flag code={row.item.nation} />)
    }, {
        name: 'discipline',
        title: 'DISCIPLINE',
        render: (row, col, props) => renderAthleteRow(row, col, props, discipline(row.item.event_discipline_category_id))
    }, {
        name: 'last_name',
        title: 'NAME',
        render: (row, col, props) => renderAthleteName(row, props, styles.WrapRowName)
    }, {
        name: 'year',
        title: 'YEAR',
        render: (row, col, props) => renderAthleteRow(row, col, props, row.item.year)
    }, {
        name: 'championship',
        title: 'CHAMPIONSHIP',
        render: (row, col, props) => renderAthleteRow(row, col, props, row.item.championship)
    }, {
        name: 'location',
        title: 'LOCATION',
        render: (row, col, props) => renderAthleteRow(row, col, props, row.item.city)
    }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.desc}>
                Athletes who have won a Quota Place in the Mixed Team Events at the WCH Changwon 2018 are (still) eligible to obtain a Quota Place in Individual Events in the following Qualifying Competitions.
            </div>
            <div className={styles.desc}>
                Version: (02.12.2019)
            </div>
            <Table
                columns={columns}
                data={dataQuota}
                classNames={styles}
                onChangeOrder={props.onChangeOrder}
            />
        </div>
    )
}