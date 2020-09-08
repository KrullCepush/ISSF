import React, { useEffect } from 'react';

import { useService } from 'utils/reservices';
import MembersList from '../../components/members-list.js';

export default function JudgesCommittee() {
    const CommitteesService = useService('committees');
    useEffect(() => {
        CommitteesService.getCommitteeMembers(5)
    }, [])
    return (
        <MembersList
            data={CommitteesService.committeeMembers.payload}
            title='ISSF Judges Committee'
            withLinkBack={false}
        />
    )
}

