export default function reduceList(array) {
    const result = [];
    const filtered = array.filter(item => (
        item.value !== null &&
        item.value != 0 &&
        item.value !== undefined &&
        item.value != -1
    ));

    while (filtered.length) {
        result.push(filtered.splice(0, 3))
    }

    return result
}