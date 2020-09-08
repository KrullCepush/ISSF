import * as C from './consts';

export function getPage(slug) {
    return {
        types: C.GET_PAGE,
        url: `/static/pages/${slug}`,
        slug
    }
}