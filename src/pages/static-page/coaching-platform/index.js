import React, { Fragment } from 'react';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import ThirdNavigation from 'components/third-navigation';
import { issfAcademyCoachingPlatform } from 'pages';
import StaticPage from '../index';

export default function ELearningStaticPage() {

    return (
        <Fragment>
            <Wrap>
                <Wrap>
                    <PageInner style={{ marginTop: '4rem' }}>
                        <ThirdNavigation items={[{
                            title: 'Members of ISSF Coach Advisory Committee' ,
                            link: issfAcademyCoachingPlatform.getPath({ slug: 'members-of-issf-coach-advisory-committee'})
                        }, {
                            title: 'ISSF Coaches',
                            link: issfAcademyCoachingPlatform.getPath({ slug: 'issf-coaches'})
                        }, {
                            title: 'Coaching Library',
                            link: issfAcademyCoachingPlatform.getPath({ slug: 'coaching-library'})
                        }, {
                            title: 'Job advertisements',
                            link: issfAcademyCoachingPlatform.getPath({ slug: 'job-advertisements'})
                        }, {
                            title: 'The Art of Skeet Shooting',
                            link: issfAcademyCoachingPlatform.getPath({ slug: 'the-art-of-skeet-shooting'})
                        }]} />
                    </PageInner>
                </Wrap>
            </Wrap>
            <StaticPage />
        </Fragment>
    )
}