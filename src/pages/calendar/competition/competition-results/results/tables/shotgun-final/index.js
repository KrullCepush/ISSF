import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';
import TableGroupCell from 'components/table/components/table-group-cell';

function checkOffset(type, index) {
    switch (type) {
        case 'skeet': return [4, 6, 10, 14, 16].includes(index % 20);
        default: {
            return [5, 10, 15, 20].includes(index % 25);
        }
    }
}

export default function RiflePistolBase({ data, tableCode, ...props }) {
    const jss = useStyles();
    const type = (() => {
        switch (tableCode) {
            case '112-2': ;
            case '113-2': return 'trap';
            default: return 'skeet'
        }
    })()

    return (
        <div className={jss.container}>
            <div className={props.headClassName}>
                <div className={clsx(jss.grid, type)}>
                    <div className={clsx(jss.col, jss.series, jss.th)}>
                        <TableGroupCell title="rounds" />
                    </div>
                    <div className={clsx(jss.col, jss.total, jss.th)}>
                        Total
                    </div>
                    <div className={clsx(jss.col, jss.remarks, jss.th)}>
                        Remarks
                    </div>
                </div>
            </div>
            <div className={clsx(jss.grid, jss.content, type)}>
                <div className={clsx(jss.col, jss.rounds, jss.td, type)}>
                    {data.targets.map((targetsItem) => (
                        <div key={targetsItem.round} style={{ order: targetsItem.round }} className={clsx(jss.round, checkOffset(type, +targetsItem.round - 1) && '_offset')} data-score={targetsItem.score}>
                            {targetsItem.score}
                        </div>
                    ))}
                </div>
                <div className={clsx(jss.col, jss.total, jss.td)}>
                    {data.info.total_competition_score}
                </div>
                <div className={clsx(jss.col, jss.remarks, jss.td)}>
                    {data.info.remarks}
                </div>
            </div>
        </div>
    )
}