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

    let { id } = useParams();

    useEffect(() => {
        CompetitionsService.getCompetition(id);
    }, [id]);

    return (
        <div className={styles.competitionContent}>
            <Switch>
                <Route {...routes.competitionMain} />
                <Route {...routes.competitionResultsMain} />
                <Route {...routes.competitionSchedule} />
                <Route {...routes.competitionPulse} />
                <Route {...routes.competitionResultsVariant1} />
                <Route {...routes.competitionMedals} />
            </Switch>
        </div>
    )

}