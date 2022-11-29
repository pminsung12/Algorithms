// Bellman-Ford algorithm
function bellmanFord(a, s) {
    let n = a.length;
    let i, j;
    let d = [];
    for (i = 0; i < n; i++) {
        d[i] = Infinity;
    }
    d[s] = 0;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n; j++) {
            if (d[j] != Infinity) {
                for (k = 0; k < n; k++) {
                    if (a[j][k] != Infinity) {
                        d[k] = Math.min(d[k], d[j] + a[j][k]);
                    }
                }
            }
        }
    }
    return d;
}

let vertices = ['s', 't', 'x', 'y', 'z'];

let data = [[0, 6, Infinity, 7, Infinity],
[Infinity, 0, 5, 8, -4],
[Infinity, -2, 0, Infinity, Infinity],
[Infinity, Infinity, -3, 0, 9],
[2, Infinity, 7, Infinity, 0]
];
res = bellmanFord(data, 0);
for (let i = 0; i < res.length; i++) {
    console.log('s->' + vertices[i] + ' ' + res[i]);
}
