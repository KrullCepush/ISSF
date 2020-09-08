import React from 'react';
import useStyles from './use-styles';
import Table from 'components/table';
import Flag from 'components/flag';
import { Link } from 'react-router-dom';
import { useService } from 'utils/reservices';
import { athletePage } from 'pages';

const tableConfig = [{
    name: 'event',
    render({item, index, array}, col, props) {
        if (!index || array[index - 1].event_discipline_category_id !== item.event_discipline_category_id) {
            const event = props.events[item.event_discipline_category_id]
            return event && event.title
        } else {
            return null;
        }
    }
}, {
    name: 'rank',
    orderDisabled: true,
    title: 'Rank',
    render(row){
        return `${row.item.rank}/${row.item.previous_rank}`
    }
}, {
    name: 'rating',
    orderDisabled: true,
}, {
    name: 'name',
    orderDisabled: true,
    render(row, col, props) {
        return (
            <Link to={athletePage.getPath({ id: row.item.athlete_id })} className={props.classNames.nameInner}>
                <i className={props.classNames.avatar} style={{backgroundImage: `url(https://result.issf-sports.info/get_image.php?issfid=${row.external_id}&width=30)`}}/>
                {row.item.name}
            </Link>
        )
    }
}, {
    name: 'nation',
    orderDisabled: true,
    render(row) {
        return (
            <Flag code={row.item.nation} width={40}/>
        )
    }
}, {
    name: 'athlete_birth_year',
    orderDisabled: true,
    title: 'Birth year'
}];

export default function Component({byEvent}) {
    const AthletesService = useService('athletes');
    const [ events, setEvents ] = React.useState({});
    const styles = useStyles();
    const CommonService = useService('common');

    const categories = CommonService.metaInfo.payload.world_rank_discipline_categories;
    React.useEffect(() => {
        setEvents(
            categories.reduce((result, item) => {
                result[item.id] = item;
                return result;
            }, {})
        )
        
    }, [categories]);

    const columns = byEvent ? tableConfig.slice(1) : tableConfig;

    return (
        <div className={styles.container}>
            <Table 
                columns={columns}
                data={AthletesService.worldRanks.payload}
                classNames={styles}
                events={events}
            />
        </div>
    )
}