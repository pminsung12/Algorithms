class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
    }
}

const graph = function () {
    const g = new Graph();
    ["a", "b", "c", "d", "e", "f", "g"].forEach((v) => g.addVertex(v));
    g.addEdge("a", "b");
    g.addEdge("a", "c");
    g.addEdge("b", "g");
    g.addEdge("b", "e");
    g.addEdge("c", "f");
    g.addEdge("d", "a");
    g.addEdge("d", "b");
    g.addEdge("d", "c");
    g.addEdge("d", "g");
    g.addEdge("d", "f");
    g.addEdge("g", "e");
    g.addEdge("g", "f");

    return g;
}();

function dfsTopSortHelper(v, n, visited, topNums) {
    visited[v] = true;
    const neighbors = graph.adjacencyList[v];
    for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
            n = dfsTopSortHelper(neighbor, n, visited, topNums);
        }
    }
    topNums[v] = n;
    return n - 1;
}

function dfsTopSort(graph) {
    const vertices = Object.keys(graph.adjacencyList);
    const visited = {};
    const topNums = {};
    let n = vertices.length - 1;
    for (const v of vertices) {
        if (!visited[v]) {
            n = dfsTopSortHelper(v, n, visited, topNums);
        }
    }
    const sortable = Object.entries(topNums)
        .sort(([, a], [, b]) => a - b)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    return sortable;
}

const res = dfsTopSort(graph);
console.log(res);
process.stdout.write("topological order >> ");
Object.keys(res).forEach((v) => process.stdout.write(v + '->'));