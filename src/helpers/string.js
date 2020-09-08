export function getUrlFromPath(path, params={}) {
    return path
        .replace(/\?/g, '')
        .replace(/:([\w_-]+)/g, (...args) => {
            return params[args[1]] || args[0];
        })
        .replace(/\/\//g, '/')
        .replace(/\/$/, '');
}

export function doCapitalize(str=""){
    return str.charAt(0).toUpperCase() + str.slice(1);
}