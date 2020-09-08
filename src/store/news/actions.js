import * as C from './consts';

export function getNews(search={}) {
    return {
        types: C.GET_NEWS,
        url: '/articles',
        search: search
    }
}

export function getNewsArticle(slug) {
    return {
        types: C.GET_NEWS_ARTICLE,
        url: `/articles/${slug}`
    }
}

export function getLatestArticle() {
    return {
        types: C.GET_LATEST_ARTICLE,
        url: '/articles',
        search: {
            page: 1,
            per_page: 1,
            sort: 'created_at asc'
        }
    }
}