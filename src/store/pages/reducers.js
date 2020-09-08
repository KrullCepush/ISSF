import * as C from './consts';
import { boundApiReducer as api } from 'redux-upgrader';

//  API RESPONSES

export const pages = api(C.GET_PAGE, Object, action => action.slug);



// REDUCERS