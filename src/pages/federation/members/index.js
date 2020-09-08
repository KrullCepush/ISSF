import React, { Fragment, useState, useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import clsx from 'clsx';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Breadcrumbs from 'components/breadcrumbs';
import { useService } from 'utils/reservices';
import * as pages from 'pages';

import useStyles from './use-styles';

import Map from './map';
import Federation from './federation';

const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('');

export default function Members() {
    const FederationsService = useService('federations');
    const styles = useStyles();
    const isConfederations = Boolean(useRouteMatch(pages.federationMembersConfederations));
    const [continent, setContinent] = useState(null);
    const [showMap, setShowMap] = useState(false);
    const [filter, setFilter] = useState(null);

    const list = FederationsService[isConfederations ? 'confederations' : 'federations'];



    useEffect(() => {
        FederationsService.getFederations();
    }, [0]);

    useEffect(() => {
        setContinent(null);
        setFilter(null);
    }, [isConfederations])

    function onClickContinent(number) {
        if (number === continent) {
            setContinent(null);
        } else {
            setContinent(number);
            setFilter(null);
        }
    }

    function toggleMap(ev) {
        ev.preventDefault();
        setShowMap(!showMap);
        setContinent(null);
    }

    function clearFilter(ev) {
        ev.preventDefault();
        setFilter(null);
    }

    function setFilterValue(ev, symbol) {
        ev.preventDefault();
        setFilter(symbol);
        setContinent(null);
    }

    return (
        <Wrap>
            <PageInner style={{ marginBottom: '2rem' }}>
                <Breadcrumbs items={[{
                    title: 'Federation',
                    link: pages.issfStructure.getPath()
                }, {
                    title: 'ISSF Members',
                    link: pages.federationMembers.getPath()
                }]} />
                <div className={styles.tabs}>
                    <NavLink to={pages.federationMembers.getPath()} className={styles.tab} exact>
                        ISSF MEMBERS
                    </NavLink>
                    <NavLink to={pages.federationMembersConfederations.getPath()} className={styles.tab} exact>
                        Continental Confederations
                    </NavLink>
                </div>
                {showMap && (
                    <div className={styles.mapBox}>
                        <Map selected={continent} onClick={onClickContinent} />
                    </div>
                )}


                <div className={styles.filer}>
                    <div className={clsx(styles.filterGroup, styles.alphabet)}>
                        {alphabet.map(symbol => (
                            <a key={symbol} href={`#${symbol}`} className={clsx(styles.filterButton, (symbol === filter) && styles.filterButtonActive, isConfederations && styles.filterButtonDisabled)} onClick={(ev) => setFilterValue(ev, symbol)}>
                                {symbol}
                            </a>
                        ))}
                    </div>
                    <div className={styles.filterGroup} style={{ visibility: filter ? 'visible' : 'hidden' }}>
                        <a href="#" className={styles.filterButton} onClick={clearFilter}>
                            Clear filter
                        </a>
                    </div>
                    <div className={styles.filterGroup}>
                        <a href="#" className={styles.filterButton} onClick={toggleMap}>
                            {showMap ? 'hide map' : 'show map'}
                        </a>
                    </div>
                </div>
                <div className={styles.federations}>
                    {list.map(item => (
                        <Federation
                            key={item.id}
                            data={item}
                            continent={continent}
                            filter={filter}
                        />
                    ))}
                </div>
            </PageInner>
        </Wrap>
    )
}