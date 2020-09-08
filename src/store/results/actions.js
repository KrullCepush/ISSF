import * as C from './consts';

export function getHistoricalFilterData(search={}) {
    return {
        types: C.GET_HISTORICAL_FILTER,
        url: '/results/historical/select_data',
        search
    }
}

export function getHistoricalEntries(search={}) {
    return {
        types: C.GET_HISTORICAL_ENTRIES,
        url: '/results/historical/entries',
        search
    }
}

export function getHistoricalResults() {
    return {
        types: C.GET_HISTORICAL_ENTRIES,
        url: 'http://localhost:3001/public/historical_results/olympicgames/og_current_events.html',
    }
}