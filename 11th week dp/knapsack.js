// 0/1 knapsack problem
function knapsack(w, v, c) {
    let dp = Array.from(Array(w.length + 1), () => new Array(c + 1).fill(0));
    for (let i = 1; i <= w.length; i++) {
        for (let j = 1; j <= c; j++) {
            if (w[i - 1] <= j) {
                dp[i][j] = Math.max(dp[i - 1][j], v[i - 1] + dp[i - 1][j - w[i - 1]]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    for (let i of dp)
        console.log(i);
    return dp[w.length][c];
}
let w = [20, 15, 30, 20, 15];
let v = [25, 30, 45, 30, 35];
let c = 55;
console.log("최대 가치는 " + knapsack(w, v, c) + "입니다.");
