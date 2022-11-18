var arr1 = [];
for (let i = 0; i < 500; i++) {
    const randomNum = Math.floor(Math.random() * (1000 - 0) + 0);
    arr1.push(randomNum);
}

const selectionProblem = function (arr, k) {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    if (k < left.length)
        return selectionProblem(left, k);
    else if (k == left.length)
        return pivot;
    else
        return selectionProblem(right, k - left.length)
};

var num1 = prompt("몇 번째 수를 찾고 싶으신가요?(1~500)");

var res = selectionProblem(arr1, Number(num1));
alert(`배열의 ${num1}째 수 >> ${res}`);