export default function inner_count(data) {
    if (!data) {
        return null
    }
    if (data.length < 1) {
        return null
    }

    if (data.length < 2) {
        return ` - 0${data}x`
    }
    return ` - ${data}x`
}