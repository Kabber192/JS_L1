function expandedForm(num) {
    const parts = [];
    let remainder = num;
    let divisor = 1;

    while (remainder > 0) {
        if (remainder % 10 !== 0) {
            parts.unshift((remainder % 10) * divisor);
        }
        remainder = Math.floor(remainder / 10);
        divisor *= 10;
    }

    return parts.join(' + ');
}
