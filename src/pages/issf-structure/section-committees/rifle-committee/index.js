import React, { useEffect } from 'react';

import { useService } from 'utils/reservices';
import MembersList from '../../components/members-list.js';

export default function RiffleCommittee() {
    const CommitteesService = useService('committees');
    useEffect(() => {
        CommitteesService.getCommitteeMembers(10)
    }, [0])

    return (
        <MembersList
            data={CommitteesService.committeeMembers.payload}
            withLinkBack={false}
            withSubNavigation={false}
            title='ISSF rifle Committee'

        />
    )
}
