import * as C from './consts';
import { boundApiReducer as api } from 'redux-upgrader';

export const quotaPlaces = api(
    C.GET_ATHLETES_OG,
    Array
);