import { getUrlFromPath } from 'helpers/string';

export default function createRoute(config) {
    return {
        ...config,
        getPath: (params) => getUrlFromPath(config.path, params).replace(/\/\:\w+/ig, '')
    }
}
