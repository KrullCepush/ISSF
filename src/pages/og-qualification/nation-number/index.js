import React, { useEffect } from 'react';
import useStyles from './use-styles';
import Flag from 'components/flag';
import Table from 'components/table';
import { useService } from 'utils/reservices';

export default function SearchEventName(props) {
    const styles = useStyles();

    const Quota = useService('quota');
    const CommonService = useService('common');

    const dataQuota = Quota.quotaPlaces.payload.filter(element => element.nation !== null)
    const disciplineList = CommonService.metaInfo.payload.world_rank_discipline_categories





    const dataAthletsSortInNation = Object.values(
        dataQuota.reduce((accum, item) => {
            if (!accum[item.nation]) {
                accum[item.nation] = { nation: item.nation, tot: 0 };
            };
            if (!accum[item.nation][item.event_discipline_category_id]) {
                accum[item.nation][item.event_discipline_category_id] = 0
            }
            accum[item.nation][item.event_discipline_category_id] += 1
            accum[item.nation].tot += 1
            return accum;
        }, {})
    )

    dataAthletsSortInNation.unshift(dataQuota.reduce((accum, item) => {
        if (!accum[item.event_discipline_category_id]) {
            accum[item.event_discipline_category_id] = 0
        }
        accum[item.event_discipline_category_id] += 1
        accum.tot += 1
        return accum
    }, { nation: 'OPEN', tot: 0 }))

    dataAthletsSortInNation.push({ nation: 'TOTALS:' })

    dataAthletsSortInNation.push(dataQuota.reduce((accum, item) => {
        if (!accum[item.event_discipline_category_id]) {
            accum[item.event_discipline_category_id] = 0
        }
        accum[item.event_discipline_category_id] += 1
        accum.tot += 1
        return accum
    }, { nation: dataAthletsSortInNation.length - 3, tot: 0 }))

    const columns = [{
        name: 'nation',
        title: 'NATION',
        render: row => {
            if (typeof row.item.nation === 'number') {
                return row.item.nation
            }
            if (row.item.nation === 'OPEN' || row.item.nation === 'TOTALS:') {
                return row.item.nation
            }
            return <Flag code={row.item.nation} />
        }
    }, {
        name: 'tot',
        title: 'TOT',
        render: row => row.item.tot
    }
    ].concat(
        disciplineList.map(element => {
            return {
                name: element.code,
                title: element.code,
                render: row => row.item[element.id]
            }
        }
        )
    )



    return (
        <div className={styles.TableContainer}>
            <div className={styles.desc}>
                Version: (02.12.2019)
            </div>
            <Table
                columns={columns}
                data={dataAthletsSortInNation}
                classNames={styles}
                onChangeOrder={props.onChangeOrder}
            />
            <div id='target' />
        </div>
    )
}