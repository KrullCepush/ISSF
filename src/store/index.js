// import {createStore, combineReducers, compose, applyMiddleware} from 'redux';

import { reducers, middlewares } from 'utils/reservices'

import superagent from 'superagent';
import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import apiMiddleware from 'middlewares/api';

import { combineReducers } from 'redux';

import './modules-config';

const apiHost = 'http://issf-api.oneclick.life/api/v1';

function createPromise({ method, url, body, creds }) {
    return new Promise(function (resolve, reject) {

        let sa = superagent(method, url)

        if (creds) {
            sa = sa.withCredentials()
        }

        return sa.send(body)
            .end(function (err, res) {
                if (err || !res.ok) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });

    });
}

export const isServer = process.env.isServer;

export default (url = '/') => {
    const history = isServer
        ? createMemoryHistory({
            initialEntries: [url]
        })
        : createBrowserHistory();

    const enhancers = [];

    if (process.env.PRJ_ENV !== 'PRODUCTION' && !isServer) {
        const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
    }

    const middleware = [
        ...middlewares,
        apiMiddleware({ createPromise, apiHost }),
        // thunk,
        routerMiddleware(history)
    ];
    const composedEnhancers = compose(
        applyMiddleware(...middleware),
        ...enhancers
    );

    const initialState = !isServer ? window.__PRELOADED_STATE__ : {};

    if (!isServer) {
        delete window.__PRELOADED_STATE__;
    }

    const store = createStore(
        combineReducers(reducers),
        initialState,
        composedEnhancers
    );

    return {
        store,
        history
    };
};
