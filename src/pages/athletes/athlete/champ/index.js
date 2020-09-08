import React from 'react';
import moment from 'moment';
import useStyles, { useTableStyles } from './use-styles';
import Table from 'components/table';


export default function Champ({ data }) {
    const styles = useStyles();
    const tableStyles = useTableStyles();
    console.log(data);



    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {data.key}
            </div>
            <div className={styles.body}>
                <Table
                    data={data.value}
                    classNames={tableStyles}
                    columns={[{
                        name: 'rank',
                        title: 'Place'
                    }, {
                        name: 'location',
                        title: 'Location'
                    }, {
                        title: 'Score',
                        name: 'score',
                        render: row => row.item.qualification_score
                    }, {
                        title: 'Semi',
                        name: 'semi',
                        render: row => row.item.intermediate_score > 0 && row.item.intermediate_score
                    }, {
                        title: 'Final',
                        name: 'final',
                        render: row => row.item.final_score
                    }, {
                        title: 'Year',
                        name: 'year',
                        render: row => moment(row.item.recorded_at).format('YYYY')
                    }]}
                />
            </div>
        </div>
    )
}