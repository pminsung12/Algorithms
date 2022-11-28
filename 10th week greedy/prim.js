function minKey(key, mstSet) {
    let min = Number.MAX_VALUE, min_index;
    for (let v = 0; v < V; v++)
        if (mstSet[v] == false && key[v] < min)
            min = key[v], min_index = v;
    return min_index;
}

function printMST(parent, graph) {
    console.log("Edge      Weight");
    for (let i = 1; i < V; i++)
        console.log(vertices[parent[i]] + "   -  " + vertices[i] + "     " + graph[i][parent[i]]);
}

function primMST(graph) {

    let parent = [];
    let key = [];
    let mstSet = [];

    for (let i = 0; i < V; i++)
        key[i] = Number.MAX_VALUE, mstSet[i] = false;

    key[0] = 0;
    parent[0] = -1;

    for (let count = 0; count < V - 1; count++) {
        let u = minKey(key, mstSet);
        mstSet[u] = true;

        for (let v = 0; v < V; v++)
            if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v])
                parent[v] = u, key[v] = graph[u][v];
    }
    printMST(parent, graph);
}

let V = 10;
let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
let graph = [
    [0, 3, 0, 0, 0, 2, 0, 0, 0, 0], //A
    [3, 0, 17, 16, 0, 0, 0, 0, 0, 0], //B
    [0, 17, 0, 8, 0, 0, 0, 0, 18, 0], //C
    [0, 16, 8, 0, 11, 0, 0, 0, 4, 0], //D
    [0, 0, 0, 11, 0, 1, 6, 5, 10, 0], //E
    [2, 0, 0, 0, 1, 0, 7, 0, 0, 0], //F
    [0, 0, 0, 0, 6, 7, 0, 15, 0, 0], //G
    [0, 0, 0, 0, 5, 0, 15, 0, 12, 13], //H
    [0, 0, 18, 4, 10, 0, 0, 12, 0, 9], //I
    [0, 0, 0, 0, 0, 0, 0, 13, 9, 0] //J
];
primMST(graph);