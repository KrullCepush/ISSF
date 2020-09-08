import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';
import TableGroupCell from 'components/table/components/table-group-cell';
import inner_count from "../helpers"

export default function RiflePistolBase({ data, ...props }) {
    const jss = useStyles();

    const positionName = {
        KN: 'Kneeling',
        PR: 'Prone',
        ST: 'Standing',
    }

    return (
        <div className={jss.container}>
            <div className={props.headClassName}>
                <div className={clsx(jss.grid, jss.head)}>
                    <div className={clsx(jss.th, jss.position)}>Positions</div>
                    <div className={clsx(jss.th, jss.series)}>
                        <TableGroupCell
                            title="series"
                            values={data.positions[0].series.map(
                                (_, i) => i + 1
                            )}
                        />
                    </div>
                    <div className={clsx(jss.th, jss.subtotal)}>Sub total</div>
                    <div className={clsx(jss.th, jss.total)}>Total</div>
                    <div className={clsx(jss.th, jss.remarks)}>Remarks</div>
                    <div className={clsx(jss.th, jss.targets)}>Targets</div>
                </div>
            </div>
            <div className={clsx(jss.grid, jss.content)}>
                <div className={clsx(jss.td, jss.position)}>
                    <div className={jss.positions}>
                        {data.positions.map(item => (
                           <div key={item.name}>
                                {positionName[item.name]}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={clsx(jss.td)}>
                    <div className={jss.positions}>
                        {data.positions.map(item => (
                            <div key={item.name} className={jss.series}>
                                {item.series.map((item, index) => (
                                    <div key={index} className={jss.seriesItem}>
                                        {item.score}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={clsx(jss.td, jss.subtotal)}>
                    <div className={jss.positions}>
                        {data.positions.map(item => (
                            <div key={item.name}>{item.subtotal}</div>
                        ))}
                    </div>
                </div>
                <div className={clsx(jss.td, jss.total, '_td')}>
                    {data.total}{inner_count(data.info.inner_count)}
                </div>
                <div className={clsx(jss.td, jss.remarks)}>
                    {data.info.remarks}
                </div>
                <div className={clsx(jss.td, jss.targets)}></div>
            </div>
        </div>
    );

    
}


// import React from 'react';
// import clsx from 'clsx';
// import usejss from './use-jss';
// import TableGroupCell from 'components/table/components/table-group-cell';
// import Athlete from '../../athlete-block';
// import Row from '../../row';

// export default function RiflePistolBase({data}) {
//     const jss = usejss();

//     return (
//         <div>
//             <Row className={jss.head}>
//                 <Athlete head/>
//                 <div className={jss.result}>
//                     <div className={clsx(jss.col, jss.hcol, jss.position)}>
//                         Positions
//                     </div>
//                     <div className={clsx(jss.col, jss.hcol)}>
//                         <TableGroupCell title="series" values={[1,2,3,4]}/>
//                     </div>
//                     <div className={clsx(styles.col, styles.hcol, styles.subtotal)}>
//                         Sub total
//                     </div>
//                     <div className={clsx(styles.col, styles.hcol, styles.total)}>
//                         total
//                     </div>
//                     <div className={clsx(styles.col, styles.hcol, styles.remarks)}>
//                         Remarks
//                     </div>
//                     <div className={clsx(styles.col, styles.hcol, styles.targets)}>
//                         Targets
//                     </div>
//                 </div>
//             </Row>
//             {data.map(item => (
//                 <Row key={item.info.id} className={styles.row}>
//                     <Athlete data={item} athlete={item.athlete} />

//                 </Row>
//             ))}
//         </div>
//     )
// }
