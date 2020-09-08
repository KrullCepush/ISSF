import React from 'react';
import useStyles from './use-styles';
import { Link } from 'react-router-dom';
import { useService } from 'utils/reservices';
import { competition } from 'pages';

export default function Competition(props) {
    const CommonService = useService('common');
    const styles = useStyles();
    const { data } = props;

    const {color} = CommonService.competitionTypeCategories[data.competition_type_category_id] || {};

    return (
        <Link to={competition.getPath(data)} className={styles.competition} style={{ backgroundColor: color }}>
            <div className={styles.info}>
                All day
                <div className={styles.geo}>
                    {data.location}
                </div>
            </div>
            <div className={styles.title}>
                {data.title}
            </div>
        </Link>
    )
}