export function withZero(number) {
    const prefix = number < 0 ? '-0' : '0';
    const abs = Math.abs(number);

    if (abs < 10) {
        return prefix + abs;
    } else {
        return String(number);
    }
}