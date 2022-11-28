// warshall algorithm
function warshall(a) {
    let n = a.length;
    let i, j, k;
    for (k = 0; k < n; k++) {
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                a[i][j] = a[i][j] || (a[i][k] && a[k][j]);
            }
        }
    }
    return a;
}
let graph = [[0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 1, 0],
[0, 0, 1, 0, 0, 1, 1],
[0, 0, 0, 1, 0, 0, 1],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 0]]
console.log(warshall(graph));