import { ApiAction } from 'redux-upgrader';
import qp from 'query-params-helpers';

import { isServer } from 'store';

export default (config = {}) => {
    const {
        createPromise = ({ method, url, body }) => fetch(url, { method, body }),
        apiHost = ''
    } = config;
    return ({ dispatch }) => {
        return (next) => (action) => {
            if (!action.type && action.url) {
                const {
                    types = new ApiAction('HTTP'),
                    method = 'GET',
                    search = {},
                    body = {},
                    creds = true,
                    prepare = (data) => data
                } = action;

                const request = {
                    ...action,
                    type: types.REQUEST
                };

                const success = {
                    ...action,
                    type: types.SUCCESS
                };

                const failure = {
                    ...action,
                    type: types.FAILURE
                };

                let url = action.url + qp.stringify(search).replace(/\[\d\]/g, '[]');

                if (!url.match(/^http/) && !action.local) {
                    url = apiHost + url;
                }

                dispatch(request);

                const config = {
                    ...action,
                    url,
                    types,
                    method,
                    search,
                    body,
                    creds
                };

                return createPromise(config)
                    .then((response) => {
                        success.response = response;
                        success.data = prepare(response.body);
                        dispatch(success);
                        return response;
                    }).catch((error) => {
                        failure.error = error;
                        dispatch(failure);

                        if (isServer) {
                            return error;
                        } else {
                            throw error;
                        }


                    });


            } else {
                return next(action);
            }
        };
    };
};
