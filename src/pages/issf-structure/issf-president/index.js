import React, { useEffect } from 'react';

import Wrap from 'components/wrap';
import MembersList from '../components/members-list'

import { useService } from 'utils/reservices';

export default function issfPresident() {
    const CommitteesService = useService('committees');

    const title = 'ISSF PRESIDENT';
    const data = CommitteesService.committeeMembers.payload.filter(payload => payload.position_name === 'ISSF President')




    useEffect(() => {
        CommitteesService.getCommitteeMembers(1)
    }, [])

    return (
        <MembersList
            title={title}
            data={data}
        />
    )
}