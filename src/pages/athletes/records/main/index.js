import React from 'react';
import useStyles from './use-styles';
import Filter from './filter';
import BracketBlock from 'components/bracket-block'
import Table from 'components/table'
import Loader from 'components/loader'
import { useService } from 'utils/reservices';
import Flag from 'components/flag';
import moment from 'moment';


const columns = [{
    name: 'championship',
    orderDisabled: true,
    render(row) {
        return row.item.old_type
    }
}, {
    name: 'junior',
    renderTitle: () => null,
    orderDisabled: true,
    render(row) {
        return row.item.junior ? 'J' : null
    }
}, {
    name: 'team',
    renderTitle: () => null,
    orderDisabled: true,
    render(row) {
        return row.item.team ? 'T' : null
    }
}, {
    name: 'nation',
    orderDisabled: true,
    render(row) {
        return <Flag code={(row.item.nation || {}).ioc_code} />
    }
}, {
    name: 'result',
    orderDisabled: true
}, {
    name: 'titles',
    orderDisabled: true,
    render(row) {
        return row.item.title.replace(/[,]/g, '')
    }
}, {
    name: 'city',
    orderDisabled: true
}, {
    name: 'date',
    orderDisabled: true,
    render(row) {
        return moment(row.item.date).format('D.MM.YYYY')
    }
}]


export default function Component() {
    const styles = useStyles();
    const AthletesService = useService('athletes');

    const { pending, payload } = AthletesService.records
    const records = Object.entries(payload)

    return (
        <div className={styles.container}>
            <Filter />
            {pending ? <Loader /> : records.map(([key, value]) => (
                <BracketBlock
                    key={key}
                    title={key}
                >
                    <Table
                        data={value}
                        classNames={styles}
                        columns={columns}
                    />
                </BracketBlock>
            ))}
        </div>
    )
}