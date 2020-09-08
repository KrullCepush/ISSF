import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';
import TableGroupCell from 'components/table/components/table-group-cell';

export default function RiflePistolBase({ data, ...props }) {
    const jss = useStyles();

    return (
        <div className={jss.container}>
            <div className={props.headClassName}>
                <div className={jss.grid}>
                    <div className={clsx(jss.th, jss.series)}>
                        Kneeling
                    </div>
                    <div className={clsx(jss.th, jss.series)}>
                        Prone
                    </div>
                    <div className={clsx(jss.th, jss.series)}>
                        <TableGroupCell title="STANDING - ELIMINATIONS" />
                    </div>
                    <div className={clsx(jss.th, jss.total)}>
                        Total
                    </div>
                    <div className={clsx(jss.th, jss.remarks)}>
                        Remarks
                    </div>
                    <div className={clsx(jss.th, jss.targets)}>
                        Targets
                    </div>
                </div>
            </div>
            <div className={clsx(jss.grid, jss.content)}>
                {['KN', 'PR', 'ST'].map((key, index) => (
                    <div key={key} className={clsx(jss.td, jss.position, key)}>
                        {data[key].map(item => (
                            <div className={jss.positionColumn}>
                                <div className={jss.stageScore}>
                                    {item.score}
                                </div>
                                {item.rows.map(item => (
                                    <div className={jss.target}>
                                        {item.total_score || item.score}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
                <div className={clsx(jss.td, jss.total)}>
                    {data.info.total_competition_score}
                </div>
                <div className={clsx(jss.td, jss.remarks)}>
                    {data.info.remarks}
                </div>
                <div className={clsx(jss.td, jss.targets)}></div>
            </div>
        </div>
    )
}
