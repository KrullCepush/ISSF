import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useService } from 'utils/reservices';
import * as routes from 'pages';
import {
    Switch,
    Route,
    useParams
} from "react-router-dom";

const useStyles = createUseStyles({
    competitionContent: {
        marginTop: 5,
        flex: 1,
        display: 'flex'
    }
})


export default function Competition() {
    const CompetitionsService = useService('competitions');
    const styles = useStyles();

    let id = 2626;

    useEffect(() => {
        CompetitionsService.getCompetition(id);
    }, [id]);

    return (
        <div className={styles.competitionContent}>
            <Switch>
                <Route {...routes.tokyoMain} />
                <Route {...routes.tokyoResultsMain} />
                <Route {...routes.tokyoSchedule} />
                <Route {...routes.tokyoPulse} />
                <Route {...routes.tokyoResultsVariant1} />
                <Route {...routes.tokyoMedals} />
            </Switch>
        </div>
    )

}