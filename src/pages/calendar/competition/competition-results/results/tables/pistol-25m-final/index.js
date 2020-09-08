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
                        <TableGroupCell title="1CS" />
                    </div>
                    <div className={clsx(jss.th, jss.series)}>
                        <TableGroupCell title="2CSE" />
                    </div>
                    <div className={clsx(jss.th, jss.total)}>Total</div>
                    <div className={clsx(jss.th, jss.remarks)}>Remarks</div>
                    <div className={clsx(jss.th, jss.targets)}>Targets</div>
                </div>
            </div>
            <div className={clsx(jss.grid, jss.content)}>
                {data.groups.map((group, index) => (
                    <div
                        key={index}
                        className={clsx(
                            jss.td,
                            jss.stage,
                            jss['g' + group.title],
                            jss['stage_' + index]
                        )}
                    >
                        {group.columns.map(column => (
                            <div className={jss.series}>
                                <span className={clsx(jss.score)}>
                                    {column.score}
                                </span>
                                <div className={jss.shots}>
                                    {column.targets.map((row, index) => (
                                        <div
                                            key={index}
                                            className={jss.shot}
                                            data-value={row.score}
                                        />
                                    ))}
                                </div>
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
    );
}
