import * as C from './consts';

export function getAthletes(search={}) {
    return {
        types: C.GET_ATHLETES,
        url: '/athletes',
        search: {
            page: 1,
            ...search,
        }
    }
}

export function getAthlete(id) {
    return {
        types: C.GET_ATHLETE,
        url: `/athletes/${id}`,
        id
    }
}

export function getWorldRanks(filter) {
    return {
        types: C.GET_WORLD_RANKS,
        url: `/athletes/${filter.period}`,
        search: filter
    }
}

export function getRecords(filter) {
    return {
        types: C.GET_RECORDS,
        url: `/records`,
        search: filter
    }
}