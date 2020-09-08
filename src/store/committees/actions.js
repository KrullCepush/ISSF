import * as C from './consts';

export function getCommitteeMembers(committeeId) {
    return {
        types: C.GET_COMMITTIES_MEMBERS,
        url: `/committees/${committeeId}`
    }
}