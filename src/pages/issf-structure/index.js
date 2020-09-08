import React, { useState } from 'react';
import {
    Switch,
    Route,
    useLocation,
    matchPath,
} from "react-router-dom";
import clsx from 'clsx'

import useStyles from './use-styles';
import Breadcrumbs from 'components/breadcrumbs';
import ASideNav from "./a-side-nav"

import Wrap from 'components/wrap'
import * as routes from 'pages';
import getMenuItems from "./navigation-list"


export default function ISSFStructure({ breadcrumbs = [] }) {
    const styles = useStyles();
    const location = useLocation();
    const listOfRoutes = getMenuItems();


    const matchedRoute = listOfRoutes.find(title => {
        const matched = matchPath(location.pathname, {
            ...title,
            exact: true
        });
        return matched
    });

    const [menuOpen, setMenuOpen] = useState(null);

    function openMenu() {
        setMenuOpen(!null)
    }


    return (
        <>
            <Wrap>
                <Wrap>
                    <div className={styles.issfWrapBreacrumbs}>
                        <Breadcrumbs
                            items={breadcrumbs}
                        />
                    </div>
                </Wrap>
            </Wrap>

            <Wrap>
                <Wrap>
                    <div className={styles.navigationWrapp} onClick={openMenu}>
                        <div className={styles.navigationHeader}> {matchedRoute && matchedRoute.pageTitle} </div>
                        <div className={styles.navigationSVG} />
                    </div>
                </Wrap>
            </Wrap>

            <Wrap>
                <Wrap>
                    <div className={styles.federationWrapper}>
                        <div className={styles.federationWrapperStructure} >
                            <Switch>
                                <Route {...routes.issfPresident} />
                                <Route {...routes.executiveCommittee} />
                                <Route {...routes.administrativeCouncil} />
                                <Route {...routes.sectionCommittees} />
                                <Route {...routes.honoraryMembers} />
                            </Switch>
                        </div>
                        <div className={clsx(styles.federationWrapperNavigation, menuOpen && styles.federationSwitcherNavActive)} onClick={() => setMenuOpen(null)}>
                            <ASideNav />
                        </div>
                    </div>
                </Wrap>
            </Wrap>
            <div className={menuOpen && styles.issfDisplayActive} onClick={() => setMenuOpen(null)} />
        </>
    )
}