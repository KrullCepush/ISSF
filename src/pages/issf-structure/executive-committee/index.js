import React, { useEffect } from 'react';

import Wrap from 'components/wrap';
import MembersList from '../components/members-list'

import { useService } from 'utils/reservices';

export default function ExecutiveCommittee() {
    const CommitteesService = useService('committees');
    const title = 'Executive Committee';
    const paragraphs = [
        'The executive committee consists of the president, the secretary general and the four vice presidents – the ISSF officers, the chairman of the technical committee and the chairman of the athlete committee - and five members of the administrative council who are all elected for four years.',
        'Its responsibility is to ensure that the decisions of the general assembly are put into effect, to supervise and coordinate the administration, to establish procedures and to act on behalf of the administrative council in urgent matters.It also designates the ISSF technical delegates or representatives and jury members for all championships under the direction of the ISSF.The committee meets at least twice a year.',
        'The ISSF executive committee consists of the following persons:'
    ]

    useEffect(() => {
        CommitteesService.getCommitteeMembers(1)
    }, [])

    return (
        <MembersList
            title={title}
            paragraphs={paragraphs}
            data={CommitteesService.committeeMembers.payload}
        />
    )
}
