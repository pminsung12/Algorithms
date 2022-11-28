// longest common subsequence
function lcs(a, b) {
    let dp = Array.from(Array(a.length + 1), () => new Array(b.length + 1).fill(0));
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] == b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    for (let i of dp)
        console.log(i);
    return dp[a.length][b.length];
}

var s1 = "topato";
var s2 = "tophat";
var s3 = "tomato";

console.log(s1, " ", s2);
const lcs1 = lcs(s1, s2);
console.log("Length of LCS is" + " " + lcs1);
console.log("");

console.log(s1, " ", s3);
const lcs2 = lcs(s1, s3)
console.log("Length of LCS is" + " " + lcs2);
console.log("");

if (lcs1 > lcs2)
    console.log(s2, "를 고르는게 좋습니다.");
else if (lcs1 < lcs2)
    console.log(s3, "를 고르는게 좋습니다.");
else
    console.log("둘다 좋습니다.");
