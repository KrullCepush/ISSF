import * as C from './consts';
import { boundApiReducer as api, boundReducer } from 'redux-upgrader';

export const watchNow = api(
    C.GET_WATCH,
    Array,
)