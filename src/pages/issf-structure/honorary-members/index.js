import React, { useEffect } from 'react';

import Wrap from 'components/wrap';
import MembersList from '../components/members-list';

import { useService } from 'utils/reservices';

export default function HonoraryMembers() {
    const CommitteesService = useService('committees');
    const title = 'Honorary Members';
    const paragraphs = [
        "Individuals may be awarded honorary membership as the Federation's highest honour. Formal proposal and election by the General Assembly is required. Honorary members may attend all meetings of the Federation, with voice but without vote.",
        '',
        'The ISSF honorary members consists of the following persons:'
    ]

    useEffect(() => {
        CommitteesService.getCommitteeMembers(3)
    }, [])

    return (
        <MembersList
            title={title}
            paragraphs={paragraphs}
            data={CommitteesService.committeeMembers.payload}
        />
    )
}


