import React, { useEffect } from 'react';

import { useService } from 'utils/reservices';
import MembersList from '../../components/members-list.js';

export default function StatusAndLegibilityCommittee() {
    const CommitteesService = useService('committees');
    useEffect(() => {
        CommitteesService.getCommitteeMembers(6)
    }, [])
    return (
        <MembersList
            data={CommitteesService.committeeMembers.payload}
            title='ISSF Status And Elegibility Committee'
            withLinkBack={false}
        />
    )
}

