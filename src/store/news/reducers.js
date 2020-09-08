import * as C from './consts';
import {boundApiReducer as api, boundReducer} from 'redux-upgrader';

export const feed = api(
    C.GET_NEWS, 
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

export const article = api(
    C.GET_NEWS_ARTICLE, 
    Object
)

export const latestArticle = boundReducer({}, {
    [C.GET_LATEST_ARTICLE.SUCCESS]: (state, action) => action.data[0]
})