import React from 'react';
import Wrap from 'components/wrap';

import { useService } from 'utils/reservices';

import MainComponent from './main';
import Tokyo2020 from "./tokyo2020"

export default function Competition() {
    const CompetitionsService = useService('competitions');
    const competition = CompetitionsService.competition.payload.competition || {};
    const component = competition.id === 2626 ? <Tokyo2020 /> : <MainComponent />

    return (
        <Wrap>
            <Wrap>
                {component}
            </Wrap>
        </Wrap>
    )
}