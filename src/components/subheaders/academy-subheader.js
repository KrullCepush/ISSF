import React from 'react';
import Subheader from 'components/header/sub-header';
import { issfAcademy, issfAcademyELearning, issfAcademyCoachingPlatform } from 'pages';

const menu = [{
    title: 'ISSF ACADEMY', 
    link: issfAcademy.getPath({ slug: 'issf-academy' })
},{
    title: 'E-LEARNING', 
    link: issfAcademyELearning.getPath({ slug: 'the-fundamentals-of-clay-target' })
},{
    title: 'Coaching Platform', 
    link: issfAcademyCoachingPlatform.getPath({ slug: 'members-of-issf-coach-advisory-committee' })
}]

export default function ISSFDocumentsSubheader() {
    return (
        <Subheader 
            title="Academy"
            getNavigation={() => menu}
            breadcrumbs={[{
                title: 'Academy',
                link: issfAcademy.getPath()
            }]}
        />
    )
}
