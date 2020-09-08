import React, { Fragment, useState, useEffect } from 'react';
import useStyles from './use-styles';

import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Button from 'components/button';
import Breadcrumbs from 'components/breadcrumbs';

import Tools from './components/tools'
// import SearchBanner from './components/search-banner'
// import AthletCard from './components/athlet-card'
import SearchResults from './components/search-results';

import { athletes } from 'pages';
import { useService } from 'utils/reservices';
import useRansack from 'hooks/use-ransack';

const perPage = 20;

export default function Athletes() {
    const Athletes = useService('athletes');
    const styles = useStyles();
    const ransack = useRansack({
        per_page: perPage,
        page: 1,
        q: {}
    });

    useEffect(() => {
        Athletes.getAthletes(ransack.params);
    }, [ransack.params]);

    function setFilter(form) {
        const q = form;

        if (form.search) {
            q.last_name_or_first_name_cont_any = form.search.split(' ');
        }

        ransack.updateQuery({ q });
    }

    return (
        <Fragment>
            <Wrap>
                <Wrap>
                    <PageInner>
                        <Breadcrumbs items={[{
                            link: athletes.getPath(),
                            title: 'Athletes'
                        }]} />
                        <Tools onChange={setFilter} />
                        <SearchResults
                            onChangeOrder={ransack.setOrder}
                        />
                        <div className={styles.loadMoreContainer}>
                            <Button onClick={ransack.loadMore}>Load more</Button>
                        </div>
                    </PageInner>
                </Wrap>
            </Wrap>
            {/* <Wrap>
                <Wrap>
                    <h2 className={styles.worldRankingTitle}>World ranking</h2>
                </Wrap>
            </Wrap>
            <div className={styles.athlets}>
                <Wrap>
                    <Wrap style={{ justifyContent: 'space-between', margin: '0 -0.25rem', padding: '0 3rem', width: 'auto' }}>
                        <AthletCard style={{ transform: `translate(${-0 * 0}px)` }}/>
                        <AthletCard style={{ transform: `translate(${-0 * 1}px)` }}/>
                        <AthletCard style={{ transform: `translate(${-0 * 2}px)` }}/>
                        <AthletCard style={{ transform: `translate(${-0 * 3}px)` }}/>
                        <AthletCard style={{ transform: `translate(${-0 * 4}px)` }}/>
                        <AthletCard style={{ transform: `translate(${-0 * 5}px)` }}/>
                    </Wrap>
                </Wrap>
            </div> */}
        </Fragment>
    )
}