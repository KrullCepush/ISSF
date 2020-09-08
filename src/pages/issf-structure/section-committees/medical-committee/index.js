import React, { useEffect } from 'react';

import { useService } from 'utils/reservices';
import MembersList from '../../components/members-list.js';

export default function MedicalCommittee() {
    const CommitteesService = useService('committees');
    useEffect(() => {
        CommitteesService.getCommitteeMembers(7)
    }, [])
    return (
        <MembersList
            data={CommitteesService.committeeMembers.payload}
            title='ISSF Medical Committee'
            withLinkBack={false}
        />
    )
}

