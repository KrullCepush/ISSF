import React, { Fragment } from 'react';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import ThirdNavigation from 'components/third-navigation';
import Breadcrumbs from 'components/breadcrumbs';
import { issfDocuments } from 'pages';
import StaticPage from '../index';

export default function ELearningStaticPage() {

    return (
        <Fragment>
            <Wrap style={{flex:0}}>
                <Wrap>
                    <PageInner>
                        <Breadcrumbs />
                        <ThirdNavigation items={[{
                            title: 'General Assembly',
                            link: issfDocuments.getPath({
                                slug: 'documents-general-assembly'
                            })
                        }, {
                            title: 'Headquarters',
                            link: issfDocuments.getPath({
                                slug: 'documents-headquarters '
                            })
                        }, {
                            title: 'ISSF Reports',
                            link: issfDocuments.getPath({
                                slug: 'documents-issf-reports'
                            })
                        }, {
                            title: 'Financial Benefits',
                            link: issfDocuments.getPath({
                                slug: 'documents-financial-benefits'
                            })
                        }, {
                            title: 'Open tenders',
                            link: issfDocuments.getPath({
                                slug: 'documents-open-tenders'
                            })
                        }]} style={{ marginTop: '1rem' }} />
                    </PageInner>
                </Wrap>
            </Wrap>
            <StaticPage breadcrumbs={false} />
        </Fragment>
    )
}