import * as C from './consts';

export function getFederations() {
    return {
        types: C.GET_FEDERATIONS,
        url: '/federations'
    }
}