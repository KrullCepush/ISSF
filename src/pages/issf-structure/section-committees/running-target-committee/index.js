import React, { useEffect } from 'react';

import { useService } from 'utils/reservices';
import MembersList from '../../components/members-list.js';

export default function PistolCommittee() {
    const CommitteesService = useService('committees');
    useEffect(() => {
        CommitteesService.getCommitteeMembers(12)
    }, [0])

    return (
        <MembersList
            data={CommitteesService.committeeMembers.payload}
            withLinkBack={false}
            withSubNavigation={false}
            title='ISSF RUNNING TARGET COMMITTEE'

        />
    )
}

