import React, { Fragment } from 'react';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import ThirdNavigation from 'components/third-navigation';
import { issfAcademyELearning } from 'pages';
import StaticPage from '../index';

export default function ELearningStaticPage() {

    return (
        <Fragment>
            <Wrap>
                <Wrap>
                    <PageInner style={{ marginTop: '4rem' }}>
                        <ThirdNavigation items={[{
                            title: 'The Fundamentals of Clay Target',
                            link: issfAcademyELearning.getPath({ slug: 'the-fundamentals-of-clay-target'})
                        }, {
                            title: 'The Fundamentals of Pistol',
                            link: issfAcademyELearning.getPath({ slug: 'the-fundamentals-of-pistol'})
                        }, {
                            title: 'The Fundamentals of Olympic Rifle Shooting',
                            link: issfAcademyELearning.getPath({ slug: 'the-fundamentals-of-olympic-rifle-shooting'})
                        }]} />
                    </PageInner>
                </Wrap>
            </Wrap>
            <StaticPage />
        </Fragment>
    )
}