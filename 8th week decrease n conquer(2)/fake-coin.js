function randomCoinOne() {
    let coins = Array.from({ length: 300 }, () => 0);
    let fakeCoin = Math.floor(Math.random() * 300);
    coins[fakeCoin] = 1;
    return coins;

}

function randomCoinTwo() {
    let coins = Array.from({ length: 300 }, () => 0);
    let fakeCoin = Math.floor(Math.random() * 300);
    let fakeCoin2 = Math.floor(Math.random() * 300);
    coins[fakeCoin] = 1;
    coins[fakeCoin2] = 1;
    return coins;
}

function fakeCoinOne(coins) {
    if (coins.length === 1)
        return countOne;
    if (coins.length === 2)
        return countOne + 1;
    countOne += 1;

    let left = coins.slice(0, coins.length / 3);
    let mid = coins.slice(coins.length / 3, coins.length * 2 / 3);
    let right = coins.slice(coins.length * 2 / 3, coins.length);

    let leftSum = 0;
    let midSum = 0;
    if (left && mid) {
        leftSum = left.reduce((a, b) => a + b, 0);
        midSum = mid.reduce((a, b) => a + b, 0);
    }

    if (leftSum > midSum) {
        fakeCoinTwo(mid);
    }
    else if (leftSum < midSum) {
        fakeCoinTwo(left);
    }
    else {
        fakeCoinOne(right);
    }
    return countOne;
}

function fakeCoinTwo(coins) {
    if (coins.length === 2)
        return countTwo;
    countTwo += 1;
    let left = coins.slice(0, coins.length / 3);
    let mid = coins.slice(coins.length / 3, coins.length * 2 / 3);
    let right = coins.slice(coins.length * 2 / 3, coins.length);
    let leftSum = 0;
    let midSum = 0;
    let rightSum = 0;
    if (left && mid && right) {
        leftSum = left.reduce((a, b) => a + b, 0);
        midSum = mid.reduce((a, b) => a + b, 0);
        rightSum = right.reduce((a, b) => a + b, 0);
    }
    if (leftSum > midSum) {
        if (leftSum === rightSum + 1)
            fakeCoinTwo(mid + right);
        else
            fakeCoinTwo(mid);
    }
    else if (leftSum < midSum) {
        if (leftSum + 1 === midSum)
            fakeCoinTwo(left + right);
        else
            fakeCoinTwo(left);
    }
    else {
        if (leftSum < rightSum)
            fakeCoinTwo(left + mid);
        else
            fakeCoinTwo(right);
    }
    return countTwo;
}

let countOne = 0;
let countTwo = 0;
for (let i = 0; i < 10; i++) {
    let coins = randomCoinOne();
    let coins2 = randomCoinTwo();
    console.log("coin One: " + fakeCoinOne(coins), " Coin Two: " + fakeCoinTwo(coins2));
    countOne = 0;
    countTwo = 0;
}

