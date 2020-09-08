import React, { useEffect } from 'react';

import Wrap from 'components/wrap';
import MembersList from '../components/members-list';

import { useService } from 'utils/reservices';

export default function AdministrativeCouncil() {
    const CommitteesService = useService('committees');
    const title = 'Administrative Council';
    const paragraphs = [
        'With the ISSF president at its head, the administrative council consists of 35 members, including the thirteen ISSF executive committee members (the president, the secretary general, four vice presidents, the chairmen of technical and athletes committee and five members) - the seven chairmen of all committees (judges, rifle, pistol running target, shotgun, medical, statutes and eligibility) except temporary committees, the five presidents or his nominee of each continental confederation, two auditors and ten other members elected for a term of four years.',
        'The council is responsible for the examination of proposals being put to the general assembly, approval of the technical rules for the shooting events, election of three members of the administrative council to the executive committee, election of individuals to the various committees, and ISSF membership - provisional election or suspension of a national member federation.',
        'The current ISSF administrative council consists of the following persons:'
    ];

    useEffect(() => {
        CommitteesService.getCommitteeMembers(2)
    }, [])

    return (
        <MembersList
            title={title}
            paragraphs={paragraphs}
            data={CommitteesService.committeeMembers.payload}
        />
    )
}

