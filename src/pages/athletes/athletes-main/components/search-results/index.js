import React, { Fragment } from 'react';
import moment from 'moment';
import useStyles from './use-styles';
import Table from 'components/table';
import Flag from 'components/flag';
import { useService } from 'utils/reservices';
import { Link } from 'react-router-dom';
import { renderAthleteRowId } from "components/table-athletes"

import { athletePage } from 'pages';

function typeMap(row, col, props) {
    const map = {
        RI: 'Rifle',
        SH: 'Shotgun',
        PI: 'Pistol',
        RT: 'Running Target'
    }
    const type = map[row.item.discipline] || row.item.discipline;
    return type;
}

const columns = [{
    name: 'world_rank_and_last_name',
    title: 'World rank',
    render: (row, col, props) => renderAthleteRowId(row, col, props, (row.item.world_rank || {}).rank)
}, {
    name: 'last_name',
    title: 'Name',
    render: (row, col, props) => (
        <Link to={athletePage.getPath({ id: row.item.id })} className={props.classNames.nameInner}>
            <i className={props.classNames.avatar} style={{ backgroundImage: `url(https://result.issf-sports.info/get_image.php?issfid=${row.item.external_id}&width=30)`, border: ['1px solid rgb(105, 105, 105)'] }} />
            {row.item.first_name} {row.item.last_name}
        </Link>
    )
}, {
    name: 'country',
    title: 'Country',
    render: (row, col, props) => renderAthleteRowId(row, col, props, <Flag code={row.item.country_old_fckn_code} />)
}, {
    name: 'gender',
    title: 'Gender',
    render: (row, col, props) => renderAthleteRowId(row, col, props, row.item.gender[0].toUpperCase())
}, {
    name: 'birthday',
    title: 'YEar of birth',
    render: (row, col, props) => renderAthleteRowId(row, col, props, moment(row.item.birthday).year() || '')
},
    //  {
    //     name: 'discipline',
    //     title: 'Discipline',
    //     render: (row, col, props) => renderAthleteRowId(row, col, props, typeMap(row))
    // }
];


export default function SearchResults(props) {
    const CommonService = useService('common');
    const AthletesService = useService('athletes');
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <Table
                columns={columns}
                data={AthletesService.athletes.payload}
                classNames={styles}
                onChangeOrder={props.onChangeOrder}
                competitionTypes={CommonService.competitionTypesByCode}
            />
        </div>
    )
}