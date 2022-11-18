const readline = require('readline');

// 인터페이스 객체
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//W: limit of knapsack , wt: weights array, val: values array, n: number of items
const knapsack = (W, wt, val, n) => {
    // if(target<0)
    //     return Number.MIN_SAFE_INTEGER;

    if (n == 0 || W == 0)
        return 0;

    //don't pick if nth item's weight is bigger than W
    if (wt[n - 1] > W)
        return knapsack(W, wt, val, n - 1);

    // pick the nth item and recur for
    // remaining items (n - 1) with reduced capacity (weight - weights[n])
    let include = val[n - 1] + knapsack(W - wt[n - 1], wt, val, n - 1)
    // leave the nth item and recur for
    // remaining items (n - 1)
    let exclude = knapsack(W, wt, val, n - 1)

    //pick or leave
    return Math.max(include, exclude);
}


let limit;
let count = -1; // 몇 번째 입력인지 기록
let item_count = 0; // 첫번쨰 줄에 입력된 N 
let input = [];
let weights = [];
let values = [];
console.log("Enter the weight limit of items >> ");
rl.on("line", function (x) {
    count++; // 입력 횟수가 증가 
    if (count > 1) console.log("Enter the (weight value) of item", count);
    if (count === 0) {
        // 첫번째 입력인 경우 앞으로 주어질 입력 개수 기록
        limit = Number(x);
        console.log("Enter the number of items >> ");
    }
    else if (count === 1) {
        item_count = Number(x);
        console.log("Enter the (weight value) of item", count);
    }
    else {
        // 이후 입력되는 N개의 입력은 배열에 저장 

        input = x.split(' ');
        weights.push(Number(input[0]));
        values.push(Number(input[1]));

    }
    if (count > item_count) {
        rl.close();
    }
}).on("close", function () {
    // 입력 종료 후 동작할 코드
    console.log(values);
    console.log(weights);
    console.time("knapsack problem with js");
    console.log("Maximium value >> ", knapsack(limit, weights, values, item_count));
    console.timeEnd("knapsack problem with js");
});






