import React, { useEffect } from 'react';

import { useService } from 'utils/reservices';
import MembersList from '../../components/members-list';
import Description from '../../components/description';
import descriptions, { publicationItems } from './athletsDescription'

export default function AthletesCommittee() {
    const CommitteesService = useService('committees');

    useEffect(() => {
        CommitteesService.getCommitteeMembers(8)
    }, [])
    return (
        <div>
            <Description
                publicationItems={publicationItems}
                descriptions={descriptions}
            />
            <MembersList
                data={CommitteesService.committeeMembers.payload}
            />
        </div>
    )
}

