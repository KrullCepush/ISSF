import * as C from './consts';
import {boundApiReducer as api} from 'redux-upgrader';
import {indexArray} from 'helpers/array';

function Results() {
    this.results = [];
    this.event_schedule = {};
}

function Competition() {
    this.competition = {
        logos: {}
    };
    this.medals = {};
}

const defaultFilter = {}

export const calendar = api(C.GET_CALENDAR, Object);

export function filter(state=defaultFilter, action) {
    switch (action.type) {
        case C.SET_COMPETITIONS_FILTER:
            return {
                ...state,
                ...action.params
            }
        default: {
            return state
        }
    }
}

export const competitionsList = api(C.GET_COMPETITIONS, Array);

export function indexedCompetitionsList(state={}, action) {
    switch (action.type) {
        case C.GET_COMPETITIONS.SUCCESS: {
            return indexArray(action.data, 'id');
        }
        default: return state
    }
}

export const competition = api(C.GET_COMPETITION, Competition);

export const results = api(C.GET_COMPETITION_RESULTS, Results);