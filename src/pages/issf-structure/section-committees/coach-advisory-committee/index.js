import React, { useEffect } from 'react';

import { useService } from 'utils/reservices';
import MembersList from '../../components/members-list.js';

export default function CoachAdvisoryCommittee() {
    const CommitteesService = useService('committees');
    useEffect(() => {
        CommitteesService.getCommitteeMembers(9)
    }, [])
    return (
        <MembersList
            title='ISSF Coach And Advisory Committee'
            data={CommitteesService.committeeMembers.payload}
            withLinkBack={false}
        />
    )
}

