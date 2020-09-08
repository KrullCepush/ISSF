import React from 'react';
import useStyles from './use-styles';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Breadcrumbs from 'components/breadcrumbs';
import TitleNavigation from 'components/title-navigation';
import { Switch, Route } from 'react-router-dom';

import { worldRankingMain, worldRankingIntroduction } from 'pages';


export default function WorldRanking() {
    return (
        <Wrap>
            <Wrap>
                <PageInner>
                    <Breadcrumbs />
                    <TitleNavigation 
                        items={[{
                            title: 'WORLD RANKING',
                            link: worldRankingMain.getPath()
                        }, {
                            title: 'introduction',
                            link: worldRankingIntroduction.getPath()
                        }]}
                    />
                    <Switch>
                        <Route {...worldRankingMain} />
                        <Route {...worldRankingIntroduction} />
                    </Switch>
                </PageInner>
            </Wrap>
        </Wrap>
    )
}