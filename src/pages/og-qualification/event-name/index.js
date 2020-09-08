import React, { useState } from 'react';
import useStyles from './use-styles';
import Table from 'components/table';
import Flag from 'components/flag';
import { useService } from 'utils/reservices';
import clsx from 'clsx';
import { renderAthleteName, renderAthleteRow } from "components/table-athletes"



export default function SearchEventName(props) {
    const [disciplineID, setDisciplineID] = useState(55);



    const styles = useStyles();

    const Quota = useService('quota');
    const CommonService = useService('common');

    const dataQuota = Quota.quotaPlaces.payload.filter((element => element.event_discipline_category_id == disciplineID))
        .sort(function (a, b) {
            if (String(a.nation) > String(b.nation)) {
                return 1;
            }
            if (String(a.nation) < String(b.nation)) {
                return -1;
            }
            return 0;
        })
    const DisciplineList = CommonService.metaInfo.payload.world_rank_discipline_categories



    function toggleDisciplineID(element) {
        setDisciplineID(element.id)
    }

    const columns = [{
        name: 'nation',
        title: 'NATION',
        render: (row, col, props) => renderAthleteRow(row, col, props, <Flag code={row.item.nation} />)
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
                Version: (02.12.2019)
            </div>
            <div className={styles.block} >
                <div className={styles.name}>
                    {DisciplineList.map(element =>
                        (<div key={element.id}
                            className={clsx(styles.title, element.id == disciplineID ? styles.activeTitle : '')}
                            onClick={() => toggleDisciplineID(element)}>
                            <div> {element.title} </div>
                            <div> {element.gender} </div>
                        </div>))}
                </div>
                <div className={styles.bracket} />
                <Table
                    columns={columns}
                    data={dataQuota}
                    classNames={styles}
                    onChangeOrder={props.onChangeOrder}
                />
            </div >
        </div>
    )
}