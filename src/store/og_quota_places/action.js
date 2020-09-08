import * as C from './consts';

export function getOgQuota() {
    return {
        types: C.GET_ATHLETES_OG,
        url: `/og_quota_places`
    }
}