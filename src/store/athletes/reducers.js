import * as C from './consts';
import {boundApiReducer as api} from 'redux-upgrader';

export const athletes = api(
    C.GET_ATHLETES, 
    Array, 
    null,
    (action, state) => {
        if (action.search.page === 1) {
            return action.data;
        } else {
            return [...state.payload, ...action.data]
        }
    }
)

class Athlete {
    world_rank={}
    results={}
    gender=''
}

export const athletesByID = api(
    C.GET_ATHLETE, 
    Athlete, 
    (action) => action.id
);

export const worldRanks = api(
    C.GET_WORLD_RANKS, 
    Array
);

export const records = api(
    C.GET_RECORDS, 
    Object
);