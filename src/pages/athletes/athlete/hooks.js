import React from 'react';
import {useParams} from 'react-router-dom';
import {useService} from 'utils/reservices';

export function useAthlete() {
    const AthletesService = useService('athletes');
    const params = useParams();
    
    React.useEffect(() => {
        AthletesService.getAthlete(params.id);
    }, [params.id]);

    return AthletesService.athletesByID.getValue(params.id);
}



export function useAchievments() {
    const AthletesService = useService('athletes');
    const CommonService = useService('common');
    const params = useParams();
    const [results, setResults] = React.useState([]);

    const metaInfo = CommonService.metaInfo.payload;
    const athlete = AthletesService.athletesByID.getValue(params.id).payload;

    React.useEffect(() => {
        const resultsArray = Object.entries(athlete.results);

        if (resultsArray.length > 0 && metaInfo.event_discipline_categories.length > 0) {
            setResults(resultsArray.map(([key, value]) => ({
                key,
                value: Object.entries(value).map(([key, value]) => ({key, value})),
                category: metaInfo.event_discipline_categories.find(cat => cat.code === key)
            })))
        }
        
    }, [athlete.results, metaInfo.event_discipline_categories]);

    return results;
}