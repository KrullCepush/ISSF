export function indexArray(array, field, multiple = false) {
    return array.reduce((result, item) => {
        if (multiple && result.hasOwnProperty(item[field])) {
            result[item[field]].push(item);
            return result;
        } else {
            return {
                ...result,
                [item[field]]: multiple ? [item] : item,
            };
        }
    }, {});
}

export function getSortFunctionByProp(getProp) {
    return function(a, b) {
        if (getProp(a) > getProp(b)) {
            return 1;
        }
        if (getProp(a) < getProp(b)) {
            return -1;
        }
        return 0;
    };
}
