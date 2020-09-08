import React, { Fragment } from 'react';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import ThirdNavigation from 'components/third-navigation';
import Breadcrumbs from 'components/breadcrumbs';
import { olympicGames } from 'pages';
import StaticPage from '../index';

export default function ELearningStaticPage() {

    return (
        <Fragment>
            <Wrap>
                <Wrap>
                    <PageInner>
                        <Breadcrumbs />
                        <ThirdNavigation items={[{
                            title: 'OLYMPIC GAMES',
                            link: olympicGames.getPath({ slug: 'olympic-games'})
                        }, {
                            title: 'RIFLE EVENTS',
                            link: olympicGames.getPath({ slug: 'olympic-games-rifle-events'})
                        }, {
                            title: 'PISTOL EVENTS',
                            link: olympicGames.getPath({ slug: 'olympic-games-pistol-events'})
                        }, {
                            title: 'SHOTGUN EVENTS',
                            link: olympicGames.getPath({ slug: 'olympic-games-shotgun-events'})
                        }, {
                            title: 'RULES AND PROCEDURES',
                            link: olympicGames.getPath({ slug: 'olympic-games-rules-and-procedures'})
                        }]} style={{marginTop: '1rem'}}/>
                    </PageInner>
                </Wrap>
            </Wrap>
            <StaticPage breadcrumbs={false}/>
        </Fragment>
    )
}