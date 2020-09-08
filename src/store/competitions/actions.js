import * as C from './consts';

export function setCompetitionsFilter(params) {
    return {
        type: C.SET_COMPETITIONS_FILTER,
        params
    }
} 

export function getCalendar(year) {
    return {
        types: C.GET_CALENDAR,
        url: '/year_schedules',
        search: { 
            years: [year]
        }
    }
}

export function getCompetitions(search={}) {
    return {
        types: C.GET_COMPETITIONS,
        url: '/competitions',
        search
    }
}

export function getCompetition(id) {
    return {
        types: C.GET_COMPETITION,
        url: `/competitions/${id}`,
        id
    }
}

export function getCompetitionResults(eventID) {
    return {
        types: C.GET_COMPETITION_RESULTS,
        url: `/event_schedules/${eventID}/results`,
        eventID
    }
}

export function getCompetitionYear(year) {
    return {
        types: C.GET_COMPETITION_YEARS,
        url: '/competitions',
        search: {
            year: year,
            q:{
                competition_type_category_id_eq: 3
            }
        }
    }
}