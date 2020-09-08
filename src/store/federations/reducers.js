import * as C from './consts';
import {boundApiReducer as api, boundReducer} from 'redux-upgrader';

// export const federations = api(C.GET_FEDERATIONS, Array);

export const federations = boundReducer([], {
    [C.GET_FEDERATIONS.SUCCESS]: (state, action) => action.data.filter(item => item.federation_type =='federation')
})


export const confederations = boundReducer([], {
    [C.GET_FEDERATIONS.SUCCESS]: (state, action) => {
        return action.data.filter(item => item.federation_type =='confederation')
    }
})