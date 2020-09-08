import * as C from './consts';
import { boundApiReducer as api } from 'redux-upgrader';

//  API RESPONSES

export const filterData = api(C.GET_HISTORICAL_FILTER, Object);
export const historicalEntries = api(C.GET_HISTORICAL_ENTRIES, Array);



// REDUCERS