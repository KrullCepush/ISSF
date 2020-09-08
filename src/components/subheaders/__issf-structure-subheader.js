import React from 'react';
import Subheader from 'components/header/sub-header';
import {
    issfStructure,
    honoraryMembers,
    sectionCommittees,
    administrativeCouncil,
    executiveCommittee,
} from 'pages';

const menu = [{
    title: 'Executive committee',
    link: executiveCommittee.getPath()
}, {
    title: 'Administrative council',
    link: administrativeCouncil.getPath()
}, {
    title: 'Commitees',
    link: sectionCommittees.getPath(),
    exact: false
}, {
    title: 'Honorary members',
    link: honoraryMembers.getPath()
},]

export default function ISSFStructureSubheader() {
    return (
        <Subheader
            title="ISSF Structure"
            breadcrumbs={[{
                title: 'ISSF Structure',
                link: issfStructure.getPath()
            }]}
        />
    )
}