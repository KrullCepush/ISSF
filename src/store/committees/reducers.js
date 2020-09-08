import * as C from './consts';
import { boundApiReducer as api } from 'redux-upgrader';

export const committeeMembers = api(
    C.GET_COMMITTIES_MEMBERS,
    Array,
    null,
    (action, state) => action.data
)
