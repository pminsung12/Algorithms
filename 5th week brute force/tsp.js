//running time report
let routes = [];

const getPermutations = (arr, selectNumber) => {
    const results = [];
    // nP1일 경우
    if (selectNumber === 1) return arr.map((el) => [el]);

    // arr = [1,2,3,4] selectNumber = 3
    // forEach((item, index, arr) =>
    arr.forEach((fixed, index, origin) => {
        // fixed를 제외한 나머지 배열
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        // 나머지 배열에 대한 순열
        const permutations = getPermutations(rest, selectNumber - 1);

        // rest에 떼 놓은 fixed 값을 붙여줌
        const attached = permutations.map((el) => [fixed, ...el]);
        // attached를 spread syntax로 복사해 push
        results.push(...attached);
    });

    return results;
};

const TSP = (graph) => {
    let nPr = getPermutations([2, 3, 4, 5], 4);
    let route = [];
    let cost;
    for (let i of nPr) {
        cost = 0;
        before_node = 1;
        for (let j of i) {
            cost += graph[before_node][j - 1];
            before_node = j;
        }
        cost += graph[before_node][0];
        route.push([i, cost]);
        // console.log(route);
        // console.log('====');
    }
    let cmp = (arr1, arr2) => {
        return arr1[1] - arr2[1];
    };
    route.sort(cmp);

    console.log("모든 경우의 수");
    route.forEach((item, index, arr) => {
        arr[index][0] = [...[1], ...arr[index][0], ...[1]];
    });
    route.forEach((item) => {
        console.log(item[0], " ", item[1]);
    });
    console.log("가장 빠른 경로");
    route.forEach((item) => {
        if (item[1] == route[0][1]) {
            console.log(item[0], " ", item[1]);
        } else {
            return false;
        }
    });
};

graph = [
    [0, 0, 0, 0, 0],
    [0, 2, 3, 2, 3],
    [2, 0, 3, 4, 1],
    [3, 3, 0, 2, 4],
    [2, 4, 2, 0, 5],
    [3, 1, 4, 5, 0],
];
console.time("tsp running time report >> ");
TSP(graph);
console.timeEnd("tsp running time report >> ");
