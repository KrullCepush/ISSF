import React from 'react';
import useStyles from './use-styles';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Breadcrumbs from 'components/breadcrumbs';
import TitleNavigation from 'components/title-navigation';
import { Switch, Route } from 'react-router-dom';

import { recordsMain, recordsIntroduction } from 'pages';

export default function Records() {
    return (
        <Wrap>
            <Wrap>
                <PageInner>
                    <Breadcrumbs />
                    <TitleNavigation 
                        items={[{
                            title: 'Records',
                            link: recordsMain.getPath()
                        }, {
                            title: 'OFFICIALLY RECOGNIZED BY THE ISSF',
                            link: recordsIntroduction.getPath()
                        }]}
                    />
                    <Switch>
                        <Route {...recordsMain} />
                        <Route {...recordsIntroduction} />
                    </Switch>
                </PageInner>
            </Wrap>
        </Wrap>
    )
}