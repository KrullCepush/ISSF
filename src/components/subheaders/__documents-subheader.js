import React from 'react';
import Subheader from 'components/header/sub-header';
import { issfDocuments } from 'pages';

const menu = [{
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
}]

export default function ISSFDocumentsSubheader() {
    return (
        <Subheader
            title="ISSF Documents"
            getNavigation={() => menu}
            breadcrumbs={[{
                title: 'ISSF Documents',
                link: issfDocuments.getPath()
            }]}
        />
    )
}