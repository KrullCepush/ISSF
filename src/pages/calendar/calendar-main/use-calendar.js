
import { useService } from 'utils/reservices';
import { withZero } from 'helpers/number';

export function useCalendarCompetitions(date) {
    const CompetitionsService = useService('competitions')
    const calendar = CompetitionsService.calendar.payload;
    const competitions = CompetitionsService.indexedCompetitionsList;

    const yearNumber = date.getUTCFullYear();
    const monthNumber = withZero(date.getUTCMonth() + 1);
    const dayNumber = withZero(date.getUTCDate());

    try {
        const months = calendar[yearNumber];
        const days = months[monthNumber];
        const ids = days[`${yearNumber}-${monthNumber}-${dayNumber}`];

        return ids
            .map(id => competitions[id])
            .filter(Boolean);
    } catch(err) {
        return [];
    } 
}

export function useCalendarMonthCompetitions(date) {
    const CompetitionsService = useService('competitions')
    const calendar = CompetitionsService.calendar.payload;
    const competitions = CompetitionsService.indexedCompetitionsList;

    const yearNumber = date.getUTCFullYear();
    const monthNumber = withZero(date.getUTCMonth() + 1);

    try {
        const months = calendar[yearNumber];
        const days = months[monthNumber];

        const ids = Array.from(
            new Set(
                [].concat(...Object.values(days))
            )
        );

        return ids
            .map(id => competitions[id])
            .filter(Boolean);
    } catch(err) {
        return [];
    }
}