let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
let edges = [
    [3, 0, 1], [2, 0, 5], [17, 1, 2], [16, 1, 3], [18, 2, 8],
    [8, 2, 3], [11, 3, 4], [4, 3, 8], [10, 8, 4], [12, 8, 7],
    [9, 8, 9], [6, 4, 6], [5, 4, 7], [13, 7, 9], [15, 7, 6],
    [1, 5, 4], [7, 5, 6],
]
let n = 10
let par = [0]
let MST = []

for (let i = 1; i < n + 1; i++) {
    par.push(i);
}

const find = (node) => {
    if (node != par[node])
        par[node] = find(par[node])
    return par[node];
}

const union = (node, node_b) => {
    root1 = find(node)
    root2 = find(node_b)
    par[root2] = root1;
}

let treeEdges = 0;

while (true) {
    if (treeEdges == n - 1)
        break;
    let [w, node, node_b] = edges.shift();
    if (find(node) != find(node_b)) {
        union(node, node_b)
        MST.push([w, vertices[node], vertices[node_b]])
        treeEdges += 1
    }
}

console.log("MST: ", MST);

