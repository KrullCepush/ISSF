import App from './app';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import jss from 'jss';
import preset from 'jss-preset-default';
import {
    JssProvider,
    ThemeProvider,
    SheetsRegistry,
    createGenerateId,
} from 'react-jss';
import { Provider } from 'react-redux';
import createStore from './store';
import theme from './config/jss/theme';
import defaultUnit from './config/jss/default-unit';

jss.setup(
    preset({
        defaultUnit,
    })
);

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .get('/*', (req, res) => {
        const context = {};
        const { store } = createStore(req.url);
        const sheets = new SheetsRegistry();
        const generateId = createGenerateId();

        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <JssProvider
                        jss={jss}
                        registry={sheets}
                        generateId={generateId}
                    >
                        <ThemeProvider theme={theme}>
                            <App />
                        </ThemeProvider>
                    </JssProvider>
                </StaticRouter>
            </Provider>
        );

        if (context.url) {
            res.redirect(context.url);
        } else {
            console.log(process.env.CLIENT_PUBLIC_PATH);
            res.status(200).send(
                `<!doctype html>
                    <html lang="">
                    <head>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta charset="utf-8" />
                        <title>International shooting sport federation</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
                        <link rel="apple-touch-icon" sizes="180x180" href="${process
                            .env.CLIENT_PUBLIC_PATH ||
                            '/'}apple-touch-icon.png">
                        <link rel="icon" type="image/png" sizes="32x32" href="${process
                            .env.CLIENT_PUBLIC_PATH || '/'}favicon-32x32.png">
                        <link rel="icon" type="image/png" sizes="16x16" href="${process
                            .env.CLIENT_PUBLIC_PATH || '/'}favicon-16x16.png">
                        <link rel="manifest" href="${process.env
                            .CLIENT_PUBLIC_PATH || ''}/site.webmanifest">
                        <style type="text/css">${sheets.toString()}</style>
                        ${
                            assets.client.css
                                ? `<link rel="stylesheet" href="${assets.client.css}">`
                                : ''
                        }
                        ${
                            process.env.NODE_ENV === 'production'
                                ? `<script src="${assets.client.js}" defer></script>`
                                : `<script src="${assets.client.js}" defer crossorigin></script>`
                        }
                    </head>
                    <body>
                        <div id="root">${markup}</div>
                    </body>
                </html>`
            );
        }
    });

export default server;
