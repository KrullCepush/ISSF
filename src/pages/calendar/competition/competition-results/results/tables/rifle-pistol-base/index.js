import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';
import TableGroupCell from 'components/table/components/table-group-cell';
import inner_count from "../helpers"

export default function RiflePistolBase({ data, ...props }) {
    const jss = useStyles();

    return (
        <div className={jss.container}>
            <div className={props.headClassName}>
                <div className={jss.grid}>
                    <div className={clsx(jss.col, jss.series, jss.th)}>
                        <TableGroupCell title="series" values={[1, 2, 3, 4, 5, 6]} />
                    </div>
                    <div className={clsx(jss.col, jss.total, jss.th)}>
                        Total
                    </div>
                    <div className={clsx(jss.col, jss.remarks, jss.th)}>
                        Remarks
                    </div>
                    <div className={clsx(jss.col, jss.targets, jss.th)}>
                        Targets
                    </div>
                </div>
            </div>
            <div className={clsx(jss.grid, jss.content)}>
                <div className={clsx(jss.col, jss.series, jss.td)}>
                    {data.series.map(seriesItem => (
                        <div key={seriesItem.stage} className={jss.seriesItem}>
                            {seriesItem.score}
                        </div>
                    ))}
                </div>
                <div className={clsx(jss.col, jss.total, jss.td)}>
                    {data.total}{inner_count(data.info.inner_count)}
                </div>
                <div className={clsx(jss.col, jss.remarks, jss.td)}>
                    {data.info.remarks}
                </div>
                <div className={clsx(jss.col, jss.targets, jss.td)}></div>
            </div>
        </div>
    )
}