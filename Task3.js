function whatCentury(year) {
    const century = Math.ceil(year / 100);
    let suffix = 'th';
    if (century % 100 === 11 || century % 100 === 12 || century % 100 === 13) {
        suffix = 'th';
    } else {
        const lastDigit = century % 10;
        if (lastDigit === 1) {
            suffix = 'st';
        } else if (lastDigit === 2) {
            suffix = 'nd';
        } else if (lastDigit === 3) {
            suffix = 'rd';
        }
    }
    return century + suffix;
}
