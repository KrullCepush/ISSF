import React, { Fragment } from 'react';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import ThirdNavigation from 'components/third-navigation';
import Breadcrumbs from 'components/breadcrumbs';
import { antiDoping } from 'pages';
import StaticPage from '../index';

export default function ELearningStaticPage() {

    return (
        <Fragment>
            <Wrap>
                <Wrap>
                    <PageInner>
                        <Breadcrumbs />
                        <ThirdNavigation items={[{
                            title: 'General information',
                            link: antiDoping.getPath({ slug: 'anti-doping-general-information' })
                        }, {
                            title: 'DOCUMENTS & FORMS',
                            link: antiDoping.getPath({ slug: 'anti-doping-documents-forms' })
                        }, {
                            title: 'WADA DOCS & FORMS',
                            link: antiDoping.getPath({ slug: 'anti-doping-wada-docs-forms' })
                        }, {
                            title: 'Anti-Doping FAQs',
                            link: antiDoping.getPath({ slug: 'anti-doping-anti-doping-faqs' })
                        }]} style={{ marginTop: '1rem' }} />
                    </PageInner>
                </Wrap>
            </Wrap>
            <StaticPage breadcrumbs={false} />
        </Fragment>
    )
}