function findMissing(arr) {
    const n = arr.length + 1;
    const sum = (arr[0] + arr[n - 2]) * n / 2;
    const actualSum = arr.reduce((a, b) => a + b, 0);
    return sum - actualSum;
}
