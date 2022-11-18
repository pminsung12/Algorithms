const quickSort = function (arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    const lSorted = quickSort(left);
    const rSorted = quickSort(right);
    console.log("pivot", pivot, " ", [...lSorted, ...rSorted]);

    return [...lSorted, pivot, ...rSorted];
};
// let count = 0;
const arr = [];
for (let i = 0; i < 100; i++) {
    const random = Math.floor(Math.random() * 100);
    arr.push(random);
}
console.time("Quick Sort with JS");
const sortedArray = quickSort(arr);
console.timeEnd("Quick Sort with JS");
console.log("Before Sorting: ", arr);
console.log("After Sorting: ", sortedArray); 