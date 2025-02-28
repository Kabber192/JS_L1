function hasTwoCubeSums(n) {
    const cubes = new Set();
    for (let a = 1; a ** 3 < n; a++) {
        for (let b = 1; b ** 3 < n; b++) {
            if (a ** 3 + b ** 3 === n) {
                const [min, max] = [a, b].sort((x, y) => x - y);
                cubes.add(`${min}-${max}`);
            }
        }
    }
    return cubes.size >= 2;
}