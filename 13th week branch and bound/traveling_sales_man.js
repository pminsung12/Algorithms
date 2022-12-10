// traveling sales man branch and bound
let adj = [[0, 14, 4, 10, 20],
[14, 0, 7, 8, 7],
[4, 5, 0, 7, 16],
[11, 7, 9, 0, 2],
[18, 7, 17, 4, 0]];
let n = 5;
let visited = Array.from({ length: n }, () => { return false });
let final_path = Array.from({ length: n + 1 }, () => { return true });
let final_res = Infinity;
// Function to copy temporary solution to
// the final solution
function copyToFinal(curr_path) {
    for (let i = 0; i < n; i++) {
        final_path[i] = curr_path[i];
    }
    final_path[n] = curr_path[0];
}
// Function to find the minimum edge cost
// having an end at the vertex i
function firstMin(adj, i) {
    let min = Infinity;
    for (let k = 0; k < n; k++)
        if (adj[i][k] < min && i != k)
            min = adj[i][k];
    return min;
}
// function to find the second minimum edge cost
// having an end at the vertex i
function secondMin(adj, i) {
    let first = Infinity, second = Infinity;
    for (let j = 0; j < n; j++) {
        if (i == j)
            continue;
        if (adj[i][j] <= first) {
            second = first;
            first = adj[i][j];
        }
        else if (adj[i][j] <= second &&
            adj[i][j] != first)
            second = adj[i][j];
    }
    return second;
}
// function that takes as arguments:
// curr_bound -> lower bound of the root node
// curr_weight-> stores the weight of the path so far
// level-> current level while moving in the search
//         space tree
// curr_path[] -> where the solution is being stored which
//                would later be copied to final_path[]
function TSPRec(adj, curr_bound, curr_weight,
    level, curr_path) {
    // base case is when we have reached level N which
    // means we have covered all the nodes once
    if (level == n) {
        // check if there is an edge from last vertex in
        // path back to the first vertex
        if (adj[curr_path[level - 1]][curr_path[0]] != 0) {
            // curr_res has the total weight of the
            // solution we got
            let curr_res = curr_weight +
                adj[curr_path[level - 1]][curr_path[0]];
            // Update final result and final path if
            // current result is better.
            if (curr_res < final_res) {
                copyToFinal(curr_path);
                final_res = curr_res;
            }
        }
        return;
    }
    // for any other level iterate for all vertices to
    // build the search space tree recursively
    for (let i = 0; i < n; i++) {
        // Consider next vertex if it is not same (diagonal
        // entry in adjacency matrix and not visited
        // already)
        if (adj[curr_path[level - 1]][i] != 0 &&
            visited[i] == false) {
            let temp = curr_bound;
            curr_weight += adj[curr_path[level - 1]][i];
            // different computation of curr_bound for
            // level 2 from the other levels
            if (level == 1)
                curr_bound -= ((firstMin(adj, curr_path[level - 1]) +
                    firstMin(adj, i)) / 2);
            else
                curr_bound -= ((secondMin(adj, curr_path[level - 1]) +
                    firstMin(adj, i)) / 2);
            // curr_bound + curr_weight is the actual lower bound
            // for the node that we have arrived on
            // If current lower bound < final_res, we need to explore
            // the node further
            if (curr_bound + curr_weight < final_res) {
                curr_path[level] = i;
                visited[i] = true;
                // call TSPRec for the next level
                TSPRec(adj, curr_bound, curr_weight,
                    level + 1, curr_path);
            }
            // Else we have to prune the node by resetting
            // all changes to curr_weight and curr_bound
            curr_weight -= adj[curr_path[level - 1]][i];
            curr_bound = temp;
            // Also reset the visited array
            memset(visited, false, visited.length);
            for (let j = 0; j <= level - 1; j++)
                visited[curr_path[j]] = true;
        }
    }
}
// This function sets up final_path
function TSP(adj) {
    let curr_path = [];
    let curr_bound = 0;
    // Compute initial bound
    for (let i = 0; i < n; i++)
        curr_bound += (firstMin(adj, i) +
            secondMin(adj, i));
    // Rounding off the lower bound to an integer
    curr_bound = Math.ceil(curr_bound / 2);
    // We start at vertex 1 so the first vertex
    // in curr_path[] is 0
    memset(curr_path, -1, curr_path.length);
    memset(visited, 0, curr_path.length);
    // Compute initial path
    for (let i = 0; i < n; i++)
        curr_path[i] = i;
    // Mark the first vertex as visited
    visited[0] = true;
    TSPRec(adj, curr_bound, 0, 1, curr_path);
}
// Function to print the solution
function memset(array, val, size) {
    for (var i = 0; i < size; ++i) {
        array[i] = val;
    }
}
// Driver code

TSP(adj);

console.log("Minimum cost :", final_res);
console.log("Path Taken : ");
for (let i = 0; i <= n; i++)
    console.log(final_path[i], " ");


