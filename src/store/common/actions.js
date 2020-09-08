import * as C from './consts';

export function getMeta() {
    return {
        types: C.GET_META,
        url: '/meta_info'
    }
}