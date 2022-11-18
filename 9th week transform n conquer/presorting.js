const bruteForce = (arr) => {
    result = []
    for (let i = 0; i < arr.length; i++) {
        flag = 0
        for (let j = 0; j < arr.length; j++) {
            if (i === j)
                continue
            if (arr[i] == arr[j])
                flag = 1
        }
        if (flag === 0)
            result.push(arr[i])
    }
    return result
};

const preSorting = (arr) => {

    result = []
    flag = 0
    arr.sort()
    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] === arr[i + 1])
            flag = 1
        else {
            if (flag === 0)
                result.push(arr[i])
            else
                flag = 0
        }
    }
    if (arr.at(-1) != arr.at(-2))
        result.push(arr[-1])
    return result
}

const arr = [];
for (let i = 0; i < 1000; i++) {
    const random = Math.floor(Math.random() * 100);
    arr.push(random);
}

console.time("Brute Force with JS");
bruteForce(arr);
console.timeEnd("Brute Force with JS");
console.time("Pre Sort with JS");
preSorting(arr);
console.timeEnd("Pre Sort with JS");