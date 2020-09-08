import App from './app';
import React from 'react';
import { hydrate } from 'react-dom';

/* Redux */
import { Provider } from 'react-redux';
import createStore from './store';

/* Router */
import { BrowserRouter } from 'react-router-dom';
import jss from 'jss';
import preset from 'jss-preset-default';
import { JssProvider } from 'react-jss';

import defaultUnit from './config/jss/default-unit';

const { store, history } = createStore();

jss.setup(
    preset({
        defaultUnit,
    })
);

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <JssProvider jss={jss}>
                <App />
            </JssProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
