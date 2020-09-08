import React from 'react';
import Subheader from 'components/header/sub-header';
import { antiDoping } from 'pages';

const menu = [{
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
}]

export default function ISSFDocumentsSubheader() {
    return (
        <Subheader
            title="Anti doping"
            getNavigation={() => menu}
            breadcrumbs={[{
                title: 'Anti doping',
                link: antiDoping.getPath()
            }]}
        />
    )
}