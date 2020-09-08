import React, { useEffect } from 'react';

import { useService } from 'utils/reservices';
import MembersList from '../../components/members-list.js';

export default function TechnicalCommittee() {
    const CommitteesService = useService('committees');
    useEffect(() => {
        CommitteesService.getCommitteeMembers(4)
    }, [])
    return (
        <MembersList
            data={CommitteesService.committeeMembers.payload}
            title='ISSF Technical Committee'
            withLinkBack={false}
        />
    )
}

