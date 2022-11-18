function getPermutations(inputArr) {
    var results = [];

    function permute(arr, memo) {
        var cur, memo = memo || [];

        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }

        return results;
    }

    return permute(inputArr);
}

const jobAssignment = (cost) => {
    let numList = [0, ...Array(9).fill().map((v, i) => i + 1)];
    let all_task = getPermutations(numList, numList.length);

    let res = [];
    let min_cost = Number.MAX_SAFE_INTEGER;
    let best_case = []
    for (let task of all_task) { //[0123456789]
        sum = 0;
        for (let i of numList) {
            sum += cost[i][task[i]];
        }
        if (sum < min_cost) {
            min_cost = sum;
            best_case = task;
        }
    }
    console.log("Optimal Case Cost >> ", min_cost);
    for (let i = 0; i < 10; i++) {
        console.log('person', i + 1, ' : job', best_case[i] + 1);
    }
}

cost = [
    [13, 6, 7, 12, 14, 15, 10, 11, 15, 4],
    [8, 14, 11, 9, 6, 14, 7, 9, 16, 12],
    [10, 8, 10, 10, 8, 15, 11, 5, 7, 9],
    [13, 13, 16, 9, 13, 16, 15, 9, 14, 16],
    [11, 4, 9, 14, 12, 11, 5, 16, 8, 14],
    [7, 10, 12, 13, 4, 11, 16, 12, 15, 9],
    [6, 11, 10, 11, 13, 15, 7, 16, 11, 12],
    [7, 15, 5, 10, 4, 16, 12, 4, 10, 16],
    [5, 14, 10, 15, 8, 8, 8, 14, 14, 4],
    [8, 11, 4, 16, 8, 12, 4, 14, 9, 6]
]
console.time("Job Assignment Problem with JS >> ");
console.log(jobAssignment(cost));
console.timeEnd("Job Assignment Problem with JS >> ");


