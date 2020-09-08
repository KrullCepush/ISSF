import React, { useState, Fragment } from 'react';
import useStyles from './use-styles';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import clsx from 'clsx';

import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Breadcrumbs from 'components/breadcrumbs';
import useLayout from 'hooks/use-layout';

import Logo from './logo';
import Navigation from './navigation';
import Tools from './tools';

import Widgets from './widgets';
import CompetitionHeader from 'pages/calendar/competition-header';

import { menu } from './menu';

import {
    home,
    competition,
    tokyo,
    // issfStructure,
    issfAcademy,
} from 'pages';

import ISSFAcademySubheader from 'components/subheaders/academy-subheader';

export default function Header(props) {
    const styles = useStyles();
    const isHome = useRouteMatch(home);
    const showLayout = useLayout();

    return (
        <header
            className={clsx(styles.header, isHome && styles.headerHomepage)}
            style={
                showLayout
                    ? {}
                    : { padding: 0, background: 'none', paddingTop: 5 }
            }
        >
            {showLayout && (
                <Wrap className={styles.headerInner}>
                    <Logo />
                    <Navigation
                        menu={menu.filter(item => !item.hamburgerOnly)}
                    />
                    <Tools
                        onToggleMenu={() => setIsDrawerOpen(!isDrawerOpen)}
                    />
                </Wrap>
            )}

            {isHome && <Widgets />}
            <Route
                path={competition.path}
                render={() => (
                    <Wrap>
                        <Wrap>
                            <PageInner style={{ margin: 0 }}>
                                <Breadcrumbs isWhite />
                                <CompetitionHeader />
                            </PageInner>
                        </Wrap>
                    </Wrap>
                )}
            />
            <Route
                path={tokyo.path}
                render={() => (
                    <Wrap>
                        <Wrap>
                            <PageInner style={{ margin: 0 }}>
                                <Breadcrumbs isWhite />
                                <CompetitionHeader />
                            </PageInner>
                        </Wrap>
                    </Wrap>
                )}
            />
            <Switch>
                <Route
                    path={issfAcademy.getPath()}
                    component={ISSFAcademySubheader}
                />
            </Switch>
        </header>
    );
}
