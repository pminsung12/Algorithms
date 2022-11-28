// floyd algorithm
function floyd(a) {
    let n = a.length;
    let i, j, k;
    for (k = 0; k < n; k++) {
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                a[i][j] = Math.min(a[i][j], a[i][k] + a[k][j]);
            }
        }
    }
    return a;
}
data = [[0, 8, 3, Infinity, Infinity, 13, Infinity, Infinity, Infinity],
[Infinity, 0, 2, 1, Infinity, Infinity, Infinity, Infinity, Infinity],
[Infinity, 3, 0, 9, 2, Infinity, Infinity, Infinity, Infinity],
[Infinity, Infinity, Infinity, 0, 4, Infinity, 6, 2, Infinity],
[5, Infinity, Infinity, 6, 0, 5, Infinity, Infinity, 4],
[Infinity, Infinity, Infinity, Infinity, Infinity, 0, 1, Infinity, 7],
[Infinity, Infinity, Infinity, Infinity, 3, Infinity, 0, 4, Infinity],
[Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 1],
[Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 5, Infinity, 0]]

console.log(floyd(data));