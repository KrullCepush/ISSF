import React from 'react';
import useStyles from './use-styles';

import Wrap from 'components/wrap';
import WidgetBox from './widget-box';

import LatestArticle from './templates/latest-article';
import WatchNow from './templates/watch-now';
import LatestResults from './templates/latest-results';

export default function Widgets(props) {

    const classNames = useStyles();

    return (
        <Wrap style={{ display: 'flex', alignItems: 'flex-end', flex: 1}}>
            <div className={classNames.widgets}>
                <WidgetBox title="Latest news" primary>
                    <LatestArticle />
                </WidgetBox>
                <WidgetBox title="Watch now">
                    <WatchNow />
                </WidgetBox>
                <WidgetBox title="Latest results">
                    <LatestResults />
                </WidgetBox>
            </div>
        </Wrap>
    )
}