import React from 'react';
import { Switch, Route } from "react-router-dom";

import Wrap from 'components/wrap';
import CommitteesList from '../components/committees-list';
import * as routes from 'pages';

export default function SectionCommittees() {
    return (
        <Switch>
            <Route {...routes.sectionRiffleCommittee} />
            <Route {...routes.sectionShotGunCommittee} />
            <Route {...routes.sectionRunningTargetCommittee} />
            <Route {...routes.sectionPistolCommittee} />
            <Route {...routes.sectionAthletesCommittee} />
            <Route {...routes.sectionTechnicalCommittee} />
            <Route {...routes.sectionStatusesAndEligibilityCommittee} />
            <Route {...routes.sectionMedicalCommittee} />
            <Route {...routes.sectionJudgesCommittee} />
            <Route {...routes.sectionCouchAndAdvisoryCommittee} />
            <Route render={() => (
                <CommitteesList
                    title='Committees'
                />
            )} />
        </Switch>
    )
}